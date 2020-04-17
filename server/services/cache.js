const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');
const redisURL = 'redis://127.0.0.1:6379';

const client = redis.createClient(redisURL);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options={}) {
  this.useCache = true;
  this.hashkey = JSON.stringify(options.key || '');
  this.cacheExpiration = options.cacheExpiration || 3600;

  return this;
}

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  // Check if we have a 'key' value in Redis
  const cachedValue = await client.hget(this.hashkey, key);

  // If we do, return it
  if (cachedValue) {
    const doc = JSON.parse(cachedValue)
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }

  // Else, send the query to Mongo and store the result in Redis
  const result = await exec.apply(this, arguments);

  client.hset(this.hashkey, key, JSON.stringify(result), 'EX', 10);

  return result;
}

function clearHashKey(hashkey) {
  client.del(JSON.stringify(hashkey));
}

const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
	name: String,
	description: String,
});

const City = mongoose.model('city', CitySchema);

module.exports = City;
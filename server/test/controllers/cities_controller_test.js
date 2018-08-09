const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');


const City = mongoose.model('city');

describe('cities controller', () => {
	it('posts to /cities creates a new city', (done) => {
		City.count().then(count => {
				request(app)
					.post('/cities')
					.send({ name: 'City One' }) // send this information to the server
					.end(() => {
						City.count().then(newCount => {
							assert(count + 1 === newCount);
						});
					done();
			});
		});
	});
});
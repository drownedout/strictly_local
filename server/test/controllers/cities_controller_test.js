const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');


const City = mongoose.model('city');

describe('cities controller', () => {
	it('post to /cities creates a new city', (done) => {
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

	it('get to /cities gets a list of cities', (done) => {
		const city1 = new City(
			{ 	name: 'CityOne', 
				description: 'This is city one'
		});

		const city2 = new City(
			{ 	name: "CityTwo", 
				description: 'This is city two' 
		});

		Promise.all([ city1.save(), city2.save() ])
			.then(() => {
				request(app)
					.get('/cities')
					.end((err, response) => {
						assert(response.body.length === 2);
						assert(response.body[0].name === 'CityOne')
					});
					done();
			});
	});
});
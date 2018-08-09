const assert = require('assert');
const City = require('../../../models/City');

describe('Creating a city', () => {
	
	it('can be saved to the database', (done) => {

		const newCity = new City({
			name: 'Anywhere',
			description: 'Could be anywhere'
		});

		newCity.save()
			.then(() => {
				assert(!newCity.isNew);
				done();
			});
	});
});
const assert = require('assert');
const User = require('../../../models/User');

describe('Creating a user', () => {

	it('can be saved to the database', (done) => {

		const newUser = new User({ 
			email: 'test@test.com',
			password: 'password',
		});

		newUser.save()
			.then(() => {
				assert(!newUser.isNew);
				done();
			});
	});
});
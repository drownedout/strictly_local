const assert = require('assert');
const User = require('../../../models/User');

describe('Validating User records', ()=> {

	// Username

	it('requires a username', () => {
		const user = new User({ username: undefined });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.username;

		assert(message === 'A username is required');
	});

	it('requires a username longer than 3 characters', () => {
		const user = new User({ username: 'bam' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.username;

		assert(message === 'Username must be between 4 and 14 characters');
	});

	it('requires a username shorter than 15 characters', () => {
		const user = new User({ username: 'myveryverylonglongname' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.username;

		assert(message === 'Username must be between 4 and 14 characters');
	});

	// First Name

	it('requires a first name', () => {
		const user = new User({ firstName: undefined });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.firstName;

		assert(message === 'You must enter your first name');
	});

	it('requires a first name longer than one character', () => {
		const user = new User({ firstName: 'b' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.firstName;

		assert(message === 'First name must between 2 and 20 characters');
	});

	it('requires a firstname shorter than 20 characters', () => {
		const user = new User({ firstName: 'thisisareallyreallylongname' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.firstName;

		assert(message === 'First name must between 2 and 20 characters');
	});

	// Last Name

	it('requires a last name', () => {
		const user = new User({ lastName: undefined });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.lastName;

		assert(message === 'You must enter your last name');
	});

	it('requires a last name longer than one character', () => {
		const user = new User({ lastName: 'b' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.lastName;

		assert(message === 'Last name must between 2 and 20 characters');
	});

	it('requires a last name shorter than 20 characters', () => {
		const user = new User({ lastName: 'thisisareallyreallylongname' });
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.lastName;

		assert(message === 'Last name must between 2 and 20 characters');
	});

	// Email

	it('requires an email', () => {
		const user = new User({
			email: undefined,
		});
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.email;

		assert(message === 'You must provide an email');
	});

	it('requires a valid email', () => {
		const user = new User({
			email: 'testing',
		});
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.email;

		assert(message === 'You must provide a valid email');
	});

	// Password

	it('requires a password', () => {
		const user = new User({
			password: undefined,
		});
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.password;

		assert(message === 'You must provide a password');
	});

	it('requires a password longer than or equal to 5 characters', () => {
		const user = new User({
			password: 'srtw',
		});
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.password;

		assert(message === 'Your password must be between 5 and 20 characters');
	});

	it('requires a password shorter than or equal to 20 characters', () => {
		const user = new User({
			password: 'verylongpasswordbeingused',
		});
		const validationResult = user.validateSync();
		const { message } = validationResult.errors.password;

		assert(message === 'Your password must be between 5 and 20 characters');
	});

});
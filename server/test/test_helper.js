const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const keys = require('../config/keys');

// Executed once before each test. Waits to run tests 
// until after MongoDB has connected. 
before((done) => {
	// Connecting to test database.
	mongoose.connect(keys.mongoTest);

	// Error handling
	mongoose.connection
		.once('open', () => {
			console.log('Connected to ' + keys.mongoTest);
			done();
		})
		.on('error', (error) => {
			console.warn('There was an error connecting to the database: ', error);
		});
});

// Clears test database before each test.
beforeEach((done) => {
	mongoose.connection.db.dropDatabase(done);
});
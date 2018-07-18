const passport = require('passport');
const User = require('../models/User');
const keys = require('../config/keys');
const { ExtractJwt, Strategy } = require('passport-jwt');

// Setup options for JWT strategy
// View request header of authorization
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: keys.jwtSecret
};

// Create JWT strategy
// Payload = decoded JWT token, done = callback function
const jwtLogin = new Strategy(jwtOptions, function(payload, done){
	// Check if the user ID in the payload exists in our database
	User.findById(payload.sub, function(err, user){
		// Error handling
		if (err){ return done(err, false); }

		if (user){ 
			// If user exists, call 'done' with that user
			done(null, user)
		} else {
			// Otherwise, call 'done' without a user object
			done(null, false);
		}

	});
});

// Tell Passport.js to use this strategy
passport.use(jwtLogin);

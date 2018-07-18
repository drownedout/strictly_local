const passport = require('passport');
const User = require('../models/User');
const keys = require('../config/keys');
const { ExtractJwt, Strategy } = require('passport-jwt');
const LocalStrategy = require('passport-local');


// Create a local strategy for logging in
const localLogin = new LocalStrategy({
	usernameField: 'email'
}, function(email, password, done){
	// Verify username and password, call done with user
	// if it is the correct email and password.
	User.findOne({ email }, function(err, user){
		if (err){ return done(err); }
		if (!user){ return done(null, false); }

		// Compare passwords
		user.comparePassword(password, function(err, isMatch){
			if (err) { return done(err); }
			if (!isMatch) { return done(null, false); }

			return done(null, user);
		});
	});
	// Otherwise, call done with false.
});


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
passport.use(localLogin);
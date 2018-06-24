const jwt = require('jwt-simple');
const User = require('../models/User');
const keys = require('../config/keys');


// Generates JWT for user
function userToken(user){

	const timeStamp = new Date().getTime();

	// sub = Subject of token, user.id = specific user id
	// iat = 'Issued at time'
	return jwt.encode({ sub: user.id, iat: timeStamp }, keys.jwtSecret);
}

exports.signup = function(req,res,next){
	const email = req.body.email;
	const password = req.body.password;

	/** 

		Todo
			- Add further checks for email, password
		
	**/

	// Checks existence of password and email
	if (!email || !password){
		return res.status(422).send({ error: 'Email and Password required' })
	}

	// See if a user with a given email exists
	User.findOne({ email }, function(err, existingUser){
		// Error handling
		if (err){ return next(err); }

		// If a user with email does exist, return an error
		if (existingUser){
			res.status(422).send({ error: 'Email already exists'} );
		}

		// If a user with email does not exist, create and save user record
		const user = new User({
			email,
			password
		});

		user.save(function(err){
			// Error handling
			if (err){ return next(err); }

			// Respond to request indicating the user was created
			res.json({ token: userToken(user) });
		});
	});
}
const User = require('../models/User');

exports.signup = function(req,res,next){
	const email = req.body.email;
	const password = req.body.password;

	// See if a user with a given email exists
	User.findOne({ email }, function(err, existingUser){
		// Error handling
		if (err){ return next(err); }

		// If a user with email does exist, return an error
		if (existingUser){
			res.status(422).send({ error: 'Email already exists'});
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
			res.json({ success: 'User has been saved'});
		});
	});
}
const jwt = require('jwt-simple');
const User = require('../models/User');
const UserValidation = require('../models/UserValidation');
const keys = require('../config/keys');
const fs = require('fs');
const cloudinary = require('cloudinary');


// Generates JWT for user
function userToken(user){
	const timeStamp = new Date().getTime();

	// sub = Subject of token, user.id = specific user id
	// iat = 'Issued at time'
	return jwt.encode({ sub: user.id, iat: timeStamp }, keys.jwtSecret);
}

exports.signup = function(req,res,next){
	const username = req.body.username;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;
	const imageFile = req.body.profilePicture;
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
		if (imageFile) {
			cloudinary.uploader.upload(imageFile, (result) => {
				const user = new User({
					username,
					firstName,
					lastName,
					email,
					password,
					profilePicture: result.url != null ? result.url : ''
				})
				user.save(function(err){
					// Error handling
					if (err){ return next(err); }

					// Respond to request indicating the user was created
					res.json({
						user,
						token: userToken(user)
					});
				});
			}, {
				resource_type: 'image',
			})
		} else {
				const user = new User({
					username,
					firstName,
					lastName,
					email,
					password,
					profilePicture: '',
				});
				user.save(function(err){

				// Error handling
				if (err){ return next(err); }

				// Respond to request indicating the user was created

				/********
					CHANGE THIS TO MAILER AUTHENICATION
				********/

				const validation = new UserValidation();

				validation.save(function(err){
					if (err){ return next(err); }
					res.json({
						validation
					});
				})
			});
		}
	});
}

exports.login = function(req, res, next){
	// User has already had their email and password authenticated
	// They just need to receive a token

	res.send({ token: userToken(req.user) });
}

exports.validateUser = function (req, res, next) {
	const id = req.query.id;
	const email = req.query.email;

	UserValidation.findById({ _id: id }, function(err, validation){
		if(err){ return next(err); }
		if(!validation) {
			res.status(422).send(
				{ error: 'Validation token has expired. Please request another one.'}
			)
		} else {
			// See if a user with a given email exists
			User.findOne({ email }, function(err, user){
				// Error handling
				if (err){ return next(err); }

				// If a user with email does exist, return an error
				if (!user){
					res.status(422).send({ error: 'Email doesn\'t exist'} );
				} else {
					const userID = user.id;

					User.findByIdAndUpdate({ _id: userID }, { active: true })
						.then(() => User.findByIdAndUpdate({ _id: userID }))
						.then(user => res.status(200).send({
							success: 'Your account has been validated.'
						}))
						.catch(next);
				}
			});
		}
	});

}

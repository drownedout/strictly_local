const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

// Define User Model
const UserSchema = new Schema({
	username: {
		type: String,
		validate: {
			validator: (username) => username.length > 3 && username.length <= 14,
			message: 'Username must be between 4 and 14 characters'
		},
		required: [true, 'A username is required'],
		unique: true,
		lowercase: true
	},
	firstName: {
		type: String,
		validate: {
			validator: (firstName) => firstName.length >= 2 && firstName.length <= 20,
			message: 'First name must between 2 and 20 characters'
		},
		required: [true, 'You must enter your first name']
	},
	lastName: {
		type: String,
		validate: {
			validator: (lastName) => lastName.length >= 2 && lastName.length <= 20,
			message: 'Last name must between 2 and 20 characters'
		},
		required: [true, 'You must enter your last name']
	},
	email: {
		type: String,
		required: [true, 'You must provide an email'],
		unique: [true, 'That email is already in use'],
		lowercase: true,
		match: [/.+\@.+\..+/, 'You must provide a valid email']
	},
	password: {
		type: String,
		validate: {
			validator: (password) => password.length >= 5 && password.length <= 20,
			message: 'Your password must be between 5 and 20 characters'
		},
		required: [true, 'You must provide a password']
	},
	profilePicture: {
		type: String,
	},
	active: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// On Save Hook, encrypt password
// This function will run before a user is saved
UserSchema.pre('save', function(next){
	// Get access to the user model. 'this' is an instance of
	// the user model.
	const user = this;

	// Generate a salt, then run a callback
	bcrypt.genSalt(10, function(err, salt){
		if (err){ return next(err); }

		// Hash user password using the salt
		bcrypt.hash(user.password, salt, null, function(err, hash){
			if (err){ return next(err); }

			// Overwrite plain text password with hash
			user.password = hash;
			next();
		});
	});
});

// Instance method
UserSchema.methods.comparePassword = function(userPassword, callback){
	bcrypt.compare(userPassword, this.password, function(err, isMatch){
		if (err){ return callback(err); }

		// If values are equal, isMatch will return true
		callback(null, isMatch);
	});
}

// Create User Model Class
const User = mongoose.model('user', UserSchema);

// Export User Model
module.exports = User;

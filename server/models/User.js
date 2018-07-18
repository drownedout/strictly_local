const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

// Define User Model
const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
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
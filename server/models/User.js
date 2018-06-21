const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define User Model
const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
});

// Create User Model Class
const User = mongoose.model('user', UserSchema);

// Export User Model
module.exports = User;
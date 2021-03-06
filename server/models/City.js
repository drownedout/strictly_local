const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const City = mongoose.model('city', CitySchema);

module.exports = City;

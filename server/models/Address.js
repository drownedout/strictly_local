const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = new Schema({
	street: {
		type: String,
		required: true
	},
  city: String,
  state: String,
	zipCode: String,
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Address = mongoose.model('address', AddressSchema);

module.exports = Address;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActivitySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
  price: String,
  hours: String,
  type: String,
  _city: { type: Schema.Types.ObjectId, ref: 'City' }
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;

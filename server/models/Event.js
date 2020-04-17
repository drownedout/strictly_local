const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
  _city: { type: Schema.Types.ObjectId, ref: 'City' }
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;

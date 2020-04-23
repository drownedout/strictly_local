const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserValidationSchema = new Schema({
  created_at: {type: Date, expires: '5m', default: Date.now}
});

const UserValidation = mongoose.model(
  'userValidation', UserValidationSchema
);

module.exports = UserValidation;

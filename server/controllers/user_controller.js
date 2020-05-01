const User = require('../models/User');
const modelController = require('./model_controller');
const jwt = require('jwt-simple');
const keys = require('../config/keys');

function getUserIdFromToken(token) {
  const data = jwt.decode(token, keys.jwtSecret);
  return data.sub
}

const user_controller = new modelController(User);

/** User Profile **/
user_controller.profile = function(req, res, next){
  const token = req.query.token;
  const userId = getUserIdFromToken(token);

  User.findById({ _id: userId })
    .then(user => res.send({
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
    }))
    .catch(next);
}

module.exports = user_controller;

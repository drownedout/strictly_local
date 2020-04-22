const User = require('../models/User');
const jwt = require('jwt-simple');
const keys = require('../config/keys');

function getUserIdFromToken(token) {
  const data = jwt.decode(token, keys.jwtSecret);
  return data.sub
}

module.exports = {
  /** SHOW **/
  profile(req, res, next){
    const token = req.query.token;
    const userId = getUserIdFromToken(token);

    User.findById({ _id: userId })
      .then(user => res.send({
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
      }))
      .catch(next);
  },
}

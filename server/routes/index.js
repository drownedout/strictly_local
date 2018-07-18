const Authentication = require('../controllers/authentication_controller');
const passportService = require('../services/passport');
const passport = require('passport');

// When a user is authenticated, do not try to create a session for them
const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = function(app){
	app.get('/', requireAuth, function(req, res, next){
		res.send('success')
	});
	app.post('/signup', Authentication.signup);
}
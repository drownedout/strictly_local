const Authentication = require('../controllers/authentication_controller');
const passportService = require('../services/passport');
const passport = require('passport');
const CitiesController = require('../controllers/city_controller')


// When a user is authenticated, do not try to create a session for them
const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', {session: false})

module.exports = function(app){
	app.get('/', requireAuth, function(req, res, next){
		res.send('success')
	});
	app.post('/login',requireLogin, Authentication.login);
	app.post('/signup', Authentication.signup);
	app.post('/cities', CitiesController.create);
	app.get('/cities', CitiesController.index);
}
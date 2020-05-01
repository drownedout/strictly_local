const Authentication = require('../controllers/authentication_controller');
const passportService = require('../services/passport');
const passport = require('passport');
const CitiesController = require('../controllers/city_controller');
const EventsController = require('../controllers/event_controller');
const UsersController = require('../controllers/user_controller');
const ActivityController = require('../controllers/activity_controller');


// When a user is authenticated, do not try to create a session for them
const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', {session: false})

module.exports = function(app){
	app.get('/', requireAuth, function(req, res, next){
		res.send('success')
	});
	app.post('/login',requireLogin, Authentication.login);
	app.post('/signup', Authentication.signup);
	app.get('/validate', Authentication.validateUser)

	/** Cities **/
	app.post('/cities', CitiesController.create);
	app.get('/cities', CitiesController.index);
	app.put('/cities/:id', CitiesController.update);
	app.get('/cities/:id', CitiesController.show);
	app.delete('/cities/:id', CitiesController.destroy);

	/** Events **/
	app.post('/events', EventsController.create);
	app.get('/events', EventsController.index);
	app.put('/events/:id', EventsController.update);
	app.get('/events/:id', EventsController.show);
	app.delete('/events/:id', EventsController.destroy);

	/** Users **/
	app.get('/profile', UsersController.profile);
	app.get('/users', UsersController.index);

	/** Activities **/
	app.post('/activities', ActivityController.create);
	app.get('/activities', ActivityController.index);
}

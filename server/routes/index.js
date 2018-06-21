const Authentication = require('../controllers/authentication_controller');

module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send('success')
	});
	app.post('/signup', Authentication.signup);
}
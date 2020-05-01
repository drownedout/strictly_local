const modelController = require('./model_controller');
const City = require('../models/City');
const Event = require('../models/Event');

const city_controller = new modelController(City);

/** Updating SHOW to return events as well **/
city_controller.show = function(req, res, next){
	const cityID = req.params.id;
	console.log(City);
	City.findById({ _id: cityID })
		.then(city => {
			return Event.find({_city: cityID})
				.then(events => res.send({city, events}))
		})
		.catch(next);
},

module.exports = city_controller;

const City = require('../models/City');

module.exports = {

	/** Create **/
	create(req, res, next){
		const cityProps = req.body; 

		City.create(cityProps)
			.then(city => res.send(city))
			.catch(next); //Calling next moves the to next middleware in chain,
			//must do it manually
	},

	/** Index **/
	index(req, res, next){
		City.find()
			.then(cities => res.send(cities))
			.catch(next);
	},

	/** Update **/
	update(req, res, next){
		const cityID = req.params.id;
		const cityProps = req.body;

		City.findByIdAndUpdate({ _id: cityID }, cityProps)
			.then(() => City.findByIdAndUpdate({ _id: cityID }))
			.then(city => res.send(city))
			.catch(next);
	},

	/** SHOW **/
	show(req, res, next){
		const cityID = req.params.id;

		City.findById({ _id: cityID })
			.then(city => res.send(city))
			.catch(next);
	}
}
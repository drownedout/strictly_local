const City = require('../models/City');

module.exports = {

	/** CREATE **/
	create(req, res, next){
		const cityProps = req.body; 

		City.create(cityProps)
			.then(city => res.send(city))
			.catch(next);
	},

	/** INDEX **/
	index(req, res, next){
		City.find()
			.then(cities => res.send(cities))
			.catch(next);
	},

	/** UPDATE **/
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
	},

	/** DESTROY **/
	destroy(req, res, next){
		const cityID = req.params.id;

		City.findByIdAndRemove({ _id: cityID })
			.then(city => res.status(204).send(city))
			.catch(next);

	}
}
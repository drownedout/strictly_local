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

}
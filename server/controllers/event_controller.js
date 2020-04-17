const Event = require('../models/Event');

module.exports = {

	/** CREATE **/
	create(req, res, next){
		const eventProps = req.body;

		Event.create(eventProps)
			.then(event => res.send(event))
			.catch(next);
	},

	/** INDEX **/
	index(req, res, next){
		Event.find()
			.then(events => res.send(events))
			.catch(next);
	},

	/** UPDATE **/
	update(req, res, next){
		const eventID = req.params.id;
		const eventProps = req.body;

		Event.findByIdAndUpdate({ _id: eventID }, eventProps)
			.then(() => Event.findByIdAndUpdate({ _id: eventID }))
			.then(event => res.send(event))
			.catch(next);
	},

	/** SHOW **/
	show(req, res, next){
		const eventID = req.params.id;

		Event.findById({ _id: eventID })
			.then(event => res.send(event))
			.catch(next);
	},

	/** DESTROY **/
	destroy(req, res, next){
		const eventID = req.params.id;

		Event.findByIdAndRemove({ _id: eventID })
			.then(event => res.status(204).send(event))
			.catch(next);

	}
}

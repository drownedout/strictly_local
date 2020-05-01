module.exports = function modelController(Model) {
	/** CREATE **/
	this.create = function(req, res, next){
		const modelProps = req.body;
		Model.create(modelProps)
			.then(model => res.send(model))
			.catch(next);
	};

	/** INDEX **/
  this.index = function(req, res, next){
		Model.find()
			.then(models => res.send(models))
			.catch(next);
	}

	/** UPDATE **/
	this.update = function(req, res, next){
		const modelID = req.params.id;
		const modelProps = req.body;

		Model.findByIdAndUpdate({ _id: modelID }, modelProps)
			.then(() => Model.findByIdAndUpdate({ _id: modelID }))
			.then(model => res.send(model))
			.catch(next);
	},

	// /** SHOW **/
	this.show = function(req, res, next){
		const modelID = req.params.id;

		Model.findById({ _id: modelID })
			.then(model => res.send(model))
			.catch(next);
	},

	// /** DESTROY **/
	this.destroy = function(req, res, next){
		const modelID = req.params.id;

		Model.findByIdAndRemove({ _id: modelID })
			.then(model => res.status(204).send(model))
			.catch(next);

	}
}

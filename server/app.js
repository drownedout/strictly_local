'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const keys = require('./config/keys');
const cloudinary = require('cloudinary');

const app = express();
const router = require('./routes/index');

/** 
	
	Todo: 
		Possibly refactor MongoDB keys
		Update cors

**/

// Cloudinary API setup
cloudinary.config({
    cloud_name: keys.CLOUDINARY_NAME,
    api_key: keys.CLOUDINARY_API_KEY,
    api_secret: keys.CLOUDINARY_API_SECRET,
});

// DB Setup
mongoose.connect(keys.mongoDev, (error) => {
	if(error){
		console.error('There was an error with Mongo DB');
		throw error;
	} else {
		console.log('MongoDB has connected to ' + keys.mongoDev);
	}
});

/** App Setup **/

// For logging incoming requests
app.use(morgan('combined'));

// CORS
app.use(cors());

// To parse requests into JSON
app.use(bodyParser.json({
	type: '*/*',
    limit: '5mb'
}));

router(app);

// Server Setup

// If port is already defined, use that - otherwise, use port 3000

module.exports = app;
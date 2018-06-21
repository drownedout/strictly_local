'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const router = require('./routes/index');

/** 
	
	Todo: 
		Create config folder for keys

**/

// DB Setup
mongoose.connect('mongodb://localhost/auth', (error) => {
	if(error){
		console.error('There was an error with Mongo DB');
		throw error;
	} else {
		console.log('MongoDB has connected to the server');
	}
});

// App Setup

// For logging incoming requests
app.use(morgan('combined'));

// To parse requests into JSON
app.use(bodyParser.json({type: '*/*'}));

router(app);

// Server Setup

// If port is already defined, use that - otherwise, use port 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
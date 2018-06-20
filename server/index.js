const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes/index');

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
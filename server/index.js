const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup



// Server Setup

// If port is already defined, use that - otherwise, use port 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
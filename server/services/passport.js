const passport = require('passport');
const User = require('../models/User');
const keys = require('../config/keys');
const { ExtractJwt, Strategy } = require('passport-jwt');


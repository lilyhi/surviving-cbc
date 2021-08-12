const { AuthenticationError } = require('apollo-server-express');
const {  User, Thought } = require('../models');
// the rest of the models go here
const { signToken } = require('../utils/auth');
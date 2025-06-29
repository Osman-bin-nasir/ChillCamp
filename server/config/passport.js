const passport = require('passport');
const passportLocal = require('passport-local');
const User = require('../models/user');

//this tells passport to use local stratagies for authentication
passport.use(new passportLocal(User.authenticate()));


//this helps user not to login (ofcourse they have to login at least 1 time ) for every task that requires to be logged in
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
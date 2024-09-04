const passport = require('passport'); 
const router = require('express').Router(); 

const {passportAuthenticate ,callbackURL} = require('../controllers/authController')

router.get('/google',passportAuthenticate); 

router.get('/google/redirect',passport.authenticate('google',{failureRedirect: '/user/registration' ,session: false}) ,callbackURL) ;

module.exports = router ;
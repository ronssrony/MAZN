const passport = require('passport'); 


module.exports.passportAuthenticate = passport.authenticate('google',{
    scope:['profile','email'] ,
    session:false
})

module.exports.callbackURL = function(req, res){
    
 res.status(200).cookie("ronss",req.user.token).redirect('/') ;

}
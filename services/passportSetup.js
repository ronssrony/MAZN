const passport = require('passport')
const newUser = require('../controllers/userAuthController')
const GoogleStrategy = require('passport-google-oauth20'); 

passport.use(new GoogleStrategy({
    //option for the google start
       callbackURL:"/auth/google/redirect" ,
       clientID: "157670939303-kqp4prvhpjaads4r078l76j7ge2jbn94.apps.googleusercontent.com" , 
       clientSecret: "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"
} , async (accessToken ,refreshToken,profile,done)=>{
          
    
    let user = await newUser.socialprofiles(
        profile.emails[0].value,
        profile.id,
        profile.photos[0].value,
        profile.displayName
    );

    done(null,user); 
      
        }
))
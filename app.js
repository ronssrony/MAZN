process.env.SUPPRESS_NO_CONFIG_WARNING = 'true';
const express =require('express') ; 
const app = express() ; 
const path = require('path') ; 
const db = require('./config/mongoose-connection')
const userRoutes = require('./routes/userRoutes'); 
const ownerRoutes = require('./routes/ownerRoutes'); 
const productRoutes = require('./routes/productRoutes'); 
const checkRoutes = require('./routes/checkoutRoutes')
const collectionRoutes = require("./routes/collectionRoutes")
const authRoutes = require('./routes/authRoutes')
const appRoutes = require('./routes/appRoutes')
const passports = require('./services/passportSetup')
const cookieParser = require('cookie-parser'); 
const session = require('express-session');
const passport = require('passport')
const {Homepage} = require('./routes/home')
const flash = require('connect-flash'); 
const {connectflash} = require('./middlewares/connectflash'); 

app.use(session({
  secret: 'bluecat', 
  resave: false,
  saveUninitialized: true
}));
app.use(flash()) ;
app.use(connectflash)
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser()); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})) ; 
app.use(express.static(path.join(__dirname , 'public'))); 
app.set ('view engine' , 'ejs') ; 

app.use('/checkout', checkRoutes)
app.use('/user' , userRoutes); 
app.use('/owner' , ownerRoutes); 
app.use('/product' , productRoutes);
app.use('/collection',collectionRoutes) 
app.use('/auth',authRoutes)
app.use('/app',appRoutes)
app.use('/api',apiRoutes)
app.use('/',Homepage)
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`The server is running on port ${PORT}`);
});



const user = require('../controllers/userAuthController')

module.exports.Homepage = async function(req, res){
    const User = await user.Finduser(req)
    console.log(User)
     res.render('home',{user:User})
}

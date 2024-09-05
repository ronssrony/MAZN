const router = require('express').Router() ;

router.get('/privacypolicy' , function(req, res){
    res.render('./partial/privacyPolicy')
})

module.exports = router ;
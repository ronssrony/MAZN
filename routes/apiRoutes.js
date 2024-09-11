const express = require('express') ; 
const router = express.Router() ; 
const products = require('../controllers/productController')


router.get('/products', async function(req, res){
    const allproducts = await products.AllProducts()

    res.status(200).json(allproducts)
})

module.exports = router  ;

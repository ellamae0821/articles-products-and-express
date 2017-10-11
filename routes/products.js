//jshint esversion:6
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');

const Products = require('../db/products.js');
const products = new Products();

//////////////// GET ALL PRODUCTS \\\\\\\\\\\\\\\\\\

router.get('/', (req, res) => {
  let productsObj = {
    products: products.getAllProducts()
  };
  res.render('partials/products', productsObj);
  //res.end
});


//////////////// POST A NEW PRODUCT \\\\\\\\\\\\\\\\\\

router.post('/', (req, res) => {
  if(products.addProduct(req.body)){
    let productsObj = {
      products: products.getAllProducts()
    };
    res.render('partials/products', productsObj);
  }else{
    res.render('product_new', productsObj);
// need to create a "new" route notrender, should be redirect
  }
});

router.get('/new', (req, res) => {
  res.render('product_new');
});

//////////////// GET A PRODUCT BY ID \\\\\\\\\\\\\\\\\\

router.get('/:id', (req, res) =>{
  let productId = parseInt (req.params.id);
  let productsObj = {products: products.getProductbyId(productId)};
  res.render('partials/product', productsObj);
});
/*
router.get('/:id', (req, res) => {
let productId = parseInt(req.params.id);
if(!products.getProductById(productId)){
res.redirect(404, '/products');
}else{
let locals = {product : products.getProductById(productId)};
res.render('./products/product', locals);
}
});*/



/*router.put('/:id',  (req, res) => {
  let requestId = parseInt (req.params.id);
//  console.log(requestId) is 10001
  let getName = products.getProductName(requestId);
//  console.log(getName);
  req.body.name = getName;
//  console.log(getName);
//  res.redirect('/products');
  res.end()
});
*/


router.put('/:id', (req, res) => {
  let productId = parseInt (req.params.id);
/*  if(products.temp(req)){
    res.redirect('/products/:id');
    res.end();
  }else{
    res.redirect(200, 'products/new');
  }*/
//  const productId = {id: Number(req.params.id)};
  res.render('partials/editproduct', productId);

});



router.delete('/:id', (req, res) => {
  console.log(req.body);
  if (products.checkId(req.body) && products.removeProductById(req.params.id.slice(1))) {
    res.redirect('/products');
    } else {
    res.redirect(`/products/${req.path.slice(1)}`);
  }
});


module.exports = router;
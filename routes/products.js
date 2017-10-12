//jshint esversion:6
const express = require('express');
const router = express.Router();


const Products = require('../db/products.js');
const products = new Products();

//////////////// GET ALL PRODUCTS \\\\\\\\\\\\\\\\\\

router.get('/', (req, res) => {
  let productsObj = {
    products: products.getAllProducts()
  };
  res.render('partials/products', productsObj);
});


//////////////// POST A NEW PRODUCT \\\\\\\\\\\\\\\\\\

router.post('/', (req, res) => {
  if(products.addProduct(req.body)){
    let productsObj = {
      products: products.getAllProducts()
    };
    res.render('partials/products', productsObj);
  }else{
    res.render('partials/product_new', productsObj);
  }
});

router.get('/new', (req, res) => {
  res.render('partials/product_new');
});


//////////////// GET A PRODUCT BY ID \\\\\\\\\\\\\\\\\\

router.get('/:id', (req, res) =>{
  let productId = parseInt (req.params.id);
  let productsObj = {products: products.getProductById(productId)};
  res.render('partials/product', productsObj);
});

//////////////// EDIT A PRODUCT  \\\\\\\\\\\\\\\\\\


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




router.get('/:id/edit', function(req, res){
  products.updateProduct(req.params.id*1, req.body);
  //product.name = req.body.name;
  res.render('partials/editproduct');
});

router.put('/:id/edit', function(req, res){
  console.log("putting '/:id/edit'", req.body);
  products.updateProduct(req.params.id*1, req.body);
  //product.name = req.body.name;
  res.redirect('/products');
});
/*
router.put('/:id/edit', (req, res) => {
  let productId = parseInt (req.params.id);
  let editThis = products.editProduct(productId, req.body);
  console.log(editThis);
  let productsObj = {products: products.getProductById(productId)};
  res.render('partials/product', productsObj);
});*/



/*router.delete('/:id', (req, res) => {
  console.log(req.body);
  if (products.checkId(req.body) && products.removeProductById(req.params.id.slice(1))) {
    res.redirect('/products');
    } else {
    res.redirect(`/products/${req.path.slice(1)}`);
  }
});*/
/*
router.delete('/:id', function(req, res){
  product.deleteProduct(req.params.id*1);
  let productsObj = {products: products.getProductById(productId)};
  res.render('partials/product', productsObj);
});*/

router.delete('/:id', (req, res) => {
  let productId = parseInt(req.params.id);
  products.deleteProduct(productId);
  res.redirect(200, '/products');
});

module.exports = router;


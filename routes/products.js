/*jshint esversion: 6*/

const express = require('express');
const Products = require('../models/products.js');
const router = express.Router();
const products = new Products();

//////////////// GET ALL PRODUCTS \\\\\\\\\\\\\\\\\\
router.get('/', (req, res) => {
  console.log("RUNNING: router.get ('/products') ");
  return products.getAllProd()
  .then( (data) => {
    res.render('partials/products', {products:data});
  });
});


//////////////// POST A NEW PRODUCT \\\\\\\\\\\\\\\\\\

router.get('/new', (req, res) => {
  console.log("RUNNING: router.get('/new')");
  res.render('partials/product_new');
});

router.post('/', (req, res) => {
console.log('RUNNING: router.post (/)');
  return products.addProduct(req.body)
  .then( (data) => {
    res.redirect('/products');
  })
  .catch( (error) => {
    res.render('partials/product_new');
  });
});






module.exports = router;



/*jshint esversion: 6*/
debugger;
const express = require('express');
const Products = require('../models/products.js');
const router = express.Router();
console.log(Products);
const products = new Products();


router.get('/', (req, res) => {
  console.log('hello');
  return products.getAllProd()
  .then( (data) => {
    console.log(data);
//    res.render('/partials/products', {products:data});
    res.json(data);
  });
});





module.exports = router;


// router.route('/')
// .get((req, res) => {
// prodFuncs.getAllProd(req, res);
// });


// const getAllProd = (req, res) => {
// Products.getInventory()
// .then(prodArray => {
// res.render('productViews/allProducts', {products: prodArray});
// })
// .catch(error => {
// res.render('productViews/allProducts', {products: prodArray});
// });
// };

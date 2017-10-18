/*jshint esversion: 6*/

const express = require('express');
const Products = require('../models/products.js');
const router = express.Router();
const products = new Products();
/*
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

//////////////// FIND A PRODUCT BY ID \\\\\\\\\\\\\\\\\\

router.get('/:id', (req, res) => {
  let productId = parseInt(req.params.id);
  return products.getByID(productId)
  .then (data => {
    res.render('partials/product', data[0]);
//    console.log('rendering:' , data);
  })
  .catch(() => {
    res.redirect('/products');
  });
});


router.put('/:id', (req, res) => {
  let productId = parseInt(req.params.id);
  let productBody = req.body;
  console.log("BEFORE RETURN at put");
  return products.editProd(productId, productBody)
  .then ((data) => {
    console.log("CAN EDIT?:");
//    return data;
//    res.render(`partials/product/${productId}`);
    res.redirect('/products');
  })
  .catch( () => {
    res.redirect(`/products/${productId}`);
  });
});

//////////////// DELETE PRODUCT \\\\\\\\\\\\\\\\\\

router.get('/:id/edit', (req, res) => {
  let productId = parseInt(req.params.id);
  res.redirect(`/products/${productId}`);
});

router.delete('/:id', (req, res) => {
  let productId = parseInt(req.params.id);
  return products.removeProd(productId)
  .then((data) => {
    res.redirect('/products');
    console.log("PLEASE DELETE:", data);
  })
  .catch (() => {
    res.redirect(`/products/${productId}`);
  });
});
*/

//////////////// EDIT A PRODUCT \\\\\\\\\\\\\\\\\\





module.exports = router;



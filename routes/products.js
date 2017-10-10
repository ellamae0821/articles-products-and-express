//jshint esversion:6
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');

const Products = require('../db/products.js');
const products = new Products();

/*router.route('/')
.get((req,res) => {
  res.render('index', )
})*/

/*router.route('/')
.post((req, res) => {
  if (req.body === req.body) {
    Products.addProduct(req.body);
    res.redirect('/products', { products : products.getAllProducts() });
  }else{
    res.redirect('/products/new');
  }
  console.log(Products);
});
*/

router.get('/', (req, res) => {
//  res.render('index', {products : products.getAllProducts()});
  res.json(products);
});


/*router.post('/', (req, res) => {
  if (req.body === req.body) {
    Products.addProduct(req.body);
    console.log(req.body);
    res.render('/partials/addProduct', { products : products.getAllProducts() });
  }else{
    res.render('/products/new');
  }
  console.log(Products);
});
*/


router.post('/products', (req, res) => {
  const data = req.body;
  data.id = ++productIds;
  products.push(data);
  res.json(data);
});


/*router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body === req.body) {
    Products.addProduct(req.body);
    console.log(req.body);
    res.send(hbs);
    console.log('Waaaaat?');
  }
});
*/


router.put('/:id',  (req, res) => {

res.json({'sucess' : true});
});

router.delete('/:id', (req, res) => {

});


module.exports = router;
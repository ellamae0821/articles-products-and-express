/*jshint esversion: 6*/

const express = require('express');
const Articles = require('../models/articles.js');
const router = express.Router();
const articles = new Articles();

//////////////// GET ALL ARTICLE \\\\\\\\\\\\\\\\\\
router.get('/', (req, res) => {
  console.log("RUNNING: router.get ('/articles') ");
  return articles.getAllArt()
  .then( (data) => {
    res.render('partials/articles', {articles:data});
  });
});


//////////////// POST A NEW ARTICLE \\\\\\\\\\\\\\\\\\

router.get('/new', (req, res) => {
  console.log("RUNNING: router.get('/new')");
  res.render('partials/article_new');
});

router.post('/', (req, res) => {
  console.log('RUNNING: router.post (/)');
  return articles.addArticle(req.body)
  .then( (data) => {
    res.redirect('/articles');
  })
  .catch( (error) => {
    res.render('partials/article_new');
  });
});

//////////////// FIND A ARTICLE BY TITLE \\\\\\\\\\\\\\\\\\

/*router.get('/:id', (req, res) => {
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

//////////////// DELETE ARTICLE \\\\\\\\\\\\\\\\\\

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






module.exports = router;



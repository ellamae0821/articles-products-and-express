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

router.get('/:url', (req, res) => {
  let artUrl = req.params.url;
  console.log('artTitle:', artUrl);
  return articles.getByTitle(artUrl)
  .then (data => {
    res.render('partials/article', data[0]);
//    console.log('rendering:' , data);
  })
  .catch(() => {
    res.redirect('/articles');
  });
});

//////////////// EDIT AN ARTICLE \\\\\\\\\\\\\\\\\\
router.put('/:url', (req, res) => {
  let artUrl = req.params.url;
  let artBody = req.body;
  console.log("body check", artBody);
  return articles.editArt(artUrl, artBody)
  .then ((data) => {
    console.log("CAN EDIT?:");
//    return data;
//    res.render(`partials/product/${productId}`);
    res.redirect('/articles');
  })
  .catch( (err) => {
    console.log(err);
//    res.redirect(`/articles/${artUrl}`);
  });
});

//////////////// DELETE ARTICLE \\\\\\\\\\\\\\\\\\

router.get('/:url/edit', (req, res) => {
  let artUrl = req.params.url;
  res.redirect(`/articles/${artUrl}`);
});

router.delete('/:url', (req, res) => {
  let artUrl = req.params.url;
  return articles.removeArt(artUrl)
  .then((data) => {
    res.redirect('/articles');
    console.log("PLEASE DELETE:", data);
  })
  .catch (() => {
    res.redirect(`/articles/${artUrl}`);
  });
});







module.exports = router;



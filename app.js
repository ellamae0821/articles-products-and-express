//jshint esversion:6
const express = require('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
//const articlesRoute = require('./routes/articles.js');
const productsRoute = require('./routes/products.js');

const app = express();

//TO MAKE SURE THAT IT RECOGNIZES THE HBS EXT
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', (req, res) =>{
/*  res.render ('home');*/
  res.send('smoke test');
});


/*app.get('/products', (req, res) => {
  res.json(products);
});*/

/*app.post('/products', (req, res) => {
  const data = req.body;
  data.id = ++productIds;
  products.push(data);
  res.json(data);
});
*/

//routers
//app.use('/articles', articleRoute);
app.use('/products', productsRoute);

module.exports = app;
//jshint esversion:6
const express = require('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
const articlesRoute = require('./routes/articles.js');
const productsRoute = require('./routes/products.js');
const PORT = process.env.PORT|| 8080;
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
  res.render ('index');
});

app.use('/articles', articlesRoute);
app.use('/products', productsRoute);

app.listen(PORT, () =>{
  console.log('Sever is listening to ', PORT);
});
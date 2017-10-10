//jshint esversion:6
const express = require('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
const PORT = process.env.PORT|| 8080;
const app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));


app.set('view engine', '.hbs');



app.get('/', (req, res) =>{
  res.render ();
});

app.listen(PORT, () =>{
  console.log('Sever is listening to ', PORT);
});
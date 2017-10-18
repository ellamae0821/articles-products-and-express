/*jshint esversion: 6*/
const pgp = require('pg-promise')();
/*const cn = {
    host: 'localhost',
    port: 5432,
    database: 'myDatabase',
//    user: 'meloverarana',
//    password:
};*/

//const db = pgp('postgress://article_product_user@localhost:5432/articles_products');
//const db = pgp('postgress://meloverarana@localhost:5432/articles_products');
const db = pgp('postgress://localhost:5432/articles_products');

class Articles {

  addArticle(article){
    let title = article.title;
    let body = article.body;
    let author = article.author;

    if (!title || !body || !author) {
      throw new Error ('Invalid Product');
    }

    let query = 'INSERT INTO articles (title, body, author) VALUES ($1, $2, $3)';
    let params = [title, body, author];
    return db.any(query, params);
  }

  getAllArt () {
    return db.any('SELECT * FROM articles');
  }

/*  getByID(id) {
    return db.any('SELECT * FROM products WHERE id = $1', [id]);
  }

  removeProd(id) {
    return db.any('DELETE FROM products WHERE id = $1', [id]);
  }


  editProd(id, product) {
    return db.any('UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4', [product.name, product.price, product.inventory, id]);*/

  }

module.exports = Articles;

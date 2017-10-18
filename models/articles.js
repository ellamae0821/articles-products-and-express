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

  getByTitle(title) {
    return db.any('SELECT * FROM articles WHERE title = $1', [title]);
  }

  removeArt(title) {
    return db.any('DELETE FROM articles WHERE title = $1', [title]);
  }


  editArt(title, article) {
    return db.any('UPDATE articles SET title = $1, body = $2, author = $3 WHERE title = $4', [article.title, article.body, article.author, title]);

  }
}

module.exports = Articles;

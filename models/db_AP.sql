DROP DATABASE IF EXISTS articles_products;
DROP USER IF EXISTS article_product_user;

CREATE USER article_product_user;
CREATE DATABASE articles_products OWNER article_product_user;
\c articles_products



-- SELECT id, name, price, inventory FROM products;
DROP TABLE IF EXISTS products;
CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR (90),
  price MONEY,
  inventory INTEGER
);


INSERT INTO products VALUES
(DEFAULT, 'Lipstick', '250', 150),
(DEFAULT, 'Eyeliner', '300', 60),
(DEFAULT, 'Face Powder', '250', 90),
(DEFAULT, 'Fake Lashes', '40', 550);

/*index the title*/


DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR (100),
  body VARCHAR,
  author VARCHAR
);


-- SELECT id, title, body, author FROM articles;
INSERT INTO articles VALUES
(DEFAULT, 'What I Learned From Reading Every Amazon Shareholders Letter', 'A new mentor of mine suggested I read Jeff Bezos’ Letter to Shareholders to refine my thoughts around building a career and a business.
So I read them all dating back to 1997 and here are my takeaways: 1/ Jeff Bezos is still Jeff Bezos
Despite memes (below) to the contrarian, the core operating principles of Amazon hasn’t changed much if at all since the company went public in 1997.
Amazon aims to be the world’s most customer-centric company. In the 1997 letter, Jeff laid out 8 bullet points on Amazon’s philosophy and throughout the years, he repeatedly talks about these principles. I highlight some in this post.
From his 2014 letter on the type of “dreamy” business Amazon aspires to build:
Customers love it, it can grow to very large size, it has strong returns on capital, and it’s durable in time.
', 'Li Jiang' ),
(DEFAULT, 'Removing the Mask of Motherhood', 'The Girl at the Bar My friend Hiroki fell in love with a girl who painted.
He said they met at a bar somewhere in Shinjuku. A quiet basement place run by an old guy who liked jazz and drank whiskey.
Hiroki said her watercolor paintings expressed a feeling he didn’t have words for. Something like a blend of nostalgia, tragedy, and hope, as portrayed by gentle, flowing arcs of color.He said she painted pictures like nothing he’d ever seen.
Her name was Toshiko.Hiroki met Toshiko by chance, after accidentally falling down the stairs that led to the bar. He pushed open the old wooden door, took a seat by the counter, and ordered a whiskey.', 'Hengtee Lim'),
(DEFAULT, 'You Are Losing, Life Ma’am', 'On Thursday, as we were leaving the home of some friends, I instructed my two year old to say goodbye. He acknowledged them one by one. “Bye, Azola. See you soon, Azola. See you later, Azola.” My friends have a two year old named Azola. They also have their own names, but in my child’s mind they are one entity…
' , 'Dominique Matti' );

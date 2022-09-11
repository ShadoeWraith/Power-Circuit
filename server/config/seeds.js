const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      "name": "electronics"
    , "parent": "/"
    , "category": "/electronics"
  }, {
      "name": "embedded"
    , "parent": "/electronics"
    , "category": "/electronics/embedded"
  }, {
      "name": "cases"
    , "parent": "/"
    , "category": "/cases"
  }, {
      "name": "big"
    , "parent": "/cases"
    , "category": "/cases/big"
  }, {
      "name": "small"
    , "parent": "/cases"
    , "category": "/cases/small"
}]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: ["/electronics/small"],
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: ["/electronics/big"],
      price: 1.99,
      quantity: 500
    }
  ]);

  console.log('products seeded');
  process.exit();
});

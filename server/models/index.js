const Products = require('./Products');
const Category = require('./Category');
const Orders = require('./Orders');
const OrderItem = require('./OrderItem');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');
const User = require('./User');

User.belongsTo(Orders, {
  foreignKey: 'user_id',
});

Orders.hasOne(User, {
  foreignKey: 'user_id',
});

Orders.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

Products.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Products, {
  foreignKey: 'category_id',
});

OrderItem.hasOne(Products, {
  foreignKey: 'product_id',
});

OrderItem.belongsTo(Orders, {
  foreignKey: 'order_id',
});

Products.belongsTo(OrderItem, {
  foreignKey: 'product_id',
});

Products.belongsToMany(Tag, {
  through: ProductTag,
});

Tag.belongsToMany(Products, {
  through: ProductTag,
});

module.exports = {
  Products,
  Category,
  Orders,
  OrderItem,
  ProductTag,
  Tag,
  User
};
const mongoose = require('mongoose');

const { Schema } = mongoose;

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  subcategories: [subcategorySchema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

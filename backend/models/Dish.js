const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
    trim: true,
  },
  chefName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  dietaryPreferences: {
    type: String,
    enum: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Non-Vegetarian', 'Keto', 'Other'],
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
    min: 1,
  },
  numberOfServings: {
    type: Number,
    required: true,
    min: 1,
  },
  cookingSkillLevel: {
    type: String,
    enum: ['Newbie', 'Rising Star', 'Proficient', 'Culinary Wizard'],
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Dish', dishSchema);
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  dishName: {
    type: String,
    trim: true,
  },
  chefName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  instructions: {
    type: [String],
  },
  dietaryPreferences: {
    type: String,
    enum: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Non-Vegetarian', 'Keto', 'Other'],
  },
  cookingTime: {
    type: Number,
    min: 1,
  },
  servings: {
    type: Number,
    min: 1,
  },
  cookingSkillLevel: {
    type: String,
    enum: ['Newbie', 'Rising Star', 'Proficient', 'Culinary Wizard'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Dish', dishSchema);
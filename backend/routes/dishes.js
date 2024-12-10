const express = require('express');
const Dish = require('../models/Dish');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const dish = new Dish(req.body);
  try {
    const newDish = await dish.save();
    res.json(newDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id).populate('chef', 'chefName');
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.json(dish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.json({ message: 'Dish deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedDish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.json(updatedDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

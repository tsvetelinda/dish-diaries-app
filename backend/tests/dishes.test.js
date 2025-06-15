const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const Dish = require('../models/Dish');
const User = require('../models/User');
const dishRoutes = require('../routes/dishes');

let app;
let mongoServer;
let testUser;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  testUser = new User({
    email: 'testchef@example.com',
    password: 'password123',
    chefName: 'Test Chef',
    favCuisine: 'Italian',
    cookingSkillLevel: 'Intermediate'
  });
  await testUser.save();

  app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use('/dishes', dishRoutes);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Dish.deleteMany();
});

describe('Dishes API', () => {
  it('should create a new dish', async () => {
    const newDish = {
      dishName: 'Spaghetti Carbonara',
      chef: testUser._id,
      description: 'Classic Italian pasta dish',
      imageUrl: 'http://example.com/spaghetti.jpg',
      ingredients: ['pasta', 'eggs', 'cheese'],
      instructions: ['Boil pasta', 'Mix with other ingredients'],
      dietaryPreferences: 'Vegetarian',
      cookingTime: 20,
      servings: 2,
      cookingSkillLevel: 'Newbie'
    };

    const res = await request(app)
      .post('/dishes')
      .send(newDish)
      .expect(200);

    expect(res.body.dishName).toBe('Spaghetti Carbonara');
    expect(res.body.description).toBe('Classic Italian pasta dish');
  });

  it('should get all dishes (empty initially)', async () => {
    const res = await request(app)
      .get('/dishes')
      .expect(200);

    expect(res.body).toEqual([]);
  });

  it('should update an existing dish', async () => {
    const dish = new Dish({
      dishName: 'Pasta Bolognese',
      chef: testUser._id,
      description: 'Meat sauce pasta',
      imageUrl: 'http://example.com/pasta.jpg',
      ingredients: ['pasta', 'meat', 'tomato sauce'],
      instructions: ['Cook pasta', 'Prepare sauce', 'Mix together'],
      dietaryPreferences: 'Non-Vegetarian',
      cookingTime: 30,
      servings: 4,
      cookingSkillLevel: 'Rising Star'
    });
    await dish.save();

    const updatedData = {
      dishName: 'Pasta Bolognese Deluxe',
      cookingTime: 35,
      servings: 5
    };

    const res = await request(app)
      .put(`/dishes/${dish._id}`)
      .send(updatedData)
      .expect(200);

    expect(res.body.dishName).toBe('Pasta Bolognese Deluxe');
    expect(res.body.cookingTime).toBe(35);
    expect(res.body.servings).toBe(5);
  });

  it('should delete an existing dish', async () => {
    const dish = new Dish({
      dishName: 'Salad',
      chef: testUser._id,
      description: 'Fresh green salad',
      imageUrl: 'http://example.com/salad.jpg',
      ingredients: ['lettuce', 'tomatoes', 'cucumber'],
      instructions: ['Chop veggies', 'Mix', 'Serve'],
      dietaryPreferences: 'Vegan',
      cookingTime: 10,
      servings: 2,
      cookingSkillLevel: 'Newbie'
    });
    await dish.save();

    await request(app)
      .delete(`/dishes/${dish._id}`)
      .expect(200);

    const foundDish = await Dish.findById(dish._id);
    expect(foundDish).toBeNull();
  });
});

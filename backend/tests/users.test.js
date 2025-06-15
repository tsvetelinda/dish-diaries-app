const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('../routes/users');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { AUTH_COOKIE_NAME } = require('../constants.js');

let app;
let mongoServer;

const JWT_SECRET = 'testsecret';

beforeAll(async () => {
  process.env.JWT_SECRET = JWT_SECRET;

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app = express();
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use('/users', userRoutes);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await User.deleteMany();
});

describe('User API', () => {
  const testUserData = {
    email: 'testuser@example.com',
    password: 'password123',
    chefName: 'Test Chef',
    favCuisine: 'Italian',
    cookingSkillLevel: 'Intermediate'
  };

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send(testUserData)
      .expect(200);

    expect(res.body.email).toBe(testUserData.email);
    expect(res.body.chefName).toBe(testUserData.chefName);
    expect(res.headers['set-cookie']).toBeDefined();
  });

  it('should not register a user with missing fields', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({ email: 'a@b.com' })
      .expect(400);

    expect(res.body.message).toBe('All fields are required!');
  });

  it('should login a registered user', async () => {
    const user = new User(testUserData);
    await user.save();

    const res = await request(app)
      .post('/users/login')
      .send({ email: testUserData.email, password: testUserData.password })
      .expect(200);

    expect(res.body.email).toBe(testUserData.email);
    expect(res.headers['set-cookie']).toBeDefined();
  });

  it('should not login with invalid credentials', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'wrong@example.com', password: 'wrongpass' })
      .expect(401);

    expect(res.body.message).toBe('Invalid email or password!');
  });

  it('should logout a user', async () => {
    const res = await request(app)
      .post('/users/logout')
      .expect(200);

    const cookie = res.headers['set-cookie'][0];
    expect(cookie).toContain(`${AUTH_COOKIE_NAME}=;`);

  });

  it('should get user profile with valid token', async () => {
    const user = new User(testUserData);
    await user.save();

    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '2h' });

    const res = await request(app)
      .get('/users/profile')
      .set('Cookie', `${AUTH_COOKIE_NAME}=${token}`)
      .expect(200);

    expect(res.body.email).toBe(testUserData.email);
    expect(res.body.password).toBeUndefined();
  });

  it('should return 404 for non-existing user profile', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const token = jwt.sign({ _id: fakeId }, JWT_SECRET, { expiresIn: '2h' });

    await request(app)
      .get('/users/profile')
      .set('Cookie', `${AUTH_COOKIE_NAME}=${token}`)
      .expect(404);
  });

  it('should update user data', async () => {
    const user = new User(testUserData);
    await user.save();

    const updatedData = { favCuisine: 'French', cookingSkillLevel: 'Advanced' };

    const res = await request(app)
      .put(`/users/${user._id}`)
      .send(updatedData)
      .expect(200);

    expect(res.body.favCuisine).toBe('French');
    expect(res.body.cookingSkillLevel).toBe('Advanced');
  });

  it('should return 404 when updating non-existing user', async () => {
    const fakeId = new mongoose.Types.ObjectId();

    await request(app)
      .put(`/users/${fakeId}`)
      .send({ favCuisine: 'French' })
      .expect(404);
  });
});

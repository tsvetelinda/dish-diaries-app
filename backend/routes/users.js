const express = require('express');
const { AUTH_COOKIE_NAME } = require('../constants.js');
const isAuth = require('../middlewares/isAuth.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    try {
        const { email, password, chefName, favCuisine, cookingSkillLevel } = req.body;

        if (!email || !password || !chefName || !favCuisine || !cookingSkillLevel) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const user = await User.findOne({ $or: [{ email }] }).lean();

        if (user) {
            return res.status(400).json({ message: 'User is already registered!' });
        }

        const newUser = await User.create({ email, password, chefName, favCuisine, cookingSkillLevel });

        const token = await generateToken(newUser);

        res.cookie(AUTH_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 2 * 60 * 60 * 1000, // 2 hours
        });

        return res.status(200).json({
            _id: newUser._id,
            email: newUser.email,
            chefName: newUser.chefName,
            favCuisine: newUser.favCuisine,
            cookingSkillLevel: newUser.cookingSkillLevel,            
        });
    } catch (err) {
        next(err);
    }
});


router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required!' });
        }

        const user = await User.findOne({ email }).lean();

        const isValid = user ? await bcrypt.compare(password, user.password) : false;

        if (!isValid) {
            return res.status(401).json({ message: 'Invalid email or password!' });
        }

        const token = await generateToken(user);

        res.cookie(AUTH_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 2 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            _id: user._id,
            email: user.email,
            chefName: user.chefName,
            favCuisine: user.favCuisine,
            cookingSkillLevel: user.cookingSkillLevel,
        });
    } catch (err) {
        next(err);
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.status(200).end();
});

router.get('/profile', isAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).end();
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).end();
    }
});

router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

async function generateToken(user) {
    const payload = { _id: user._id };
    const options = { expiresIn: '2h' };

    return await jwt.sign(payload, process.env.JWT_SECRET, options);
}  

module.exports = router;
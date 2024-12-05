const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    chefName: {
        type: String,
        required: true,
    },
    favCuisine: {
        type: String,
        required: true,
    },
    cookingSkillLevel: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

module.exports = mongoose.model('User', userSchema);
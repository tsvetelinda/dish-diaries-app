import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
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

const User = model('User', userSchema);

export default User;
import { User } from "./user";

export interface Reaction {
    user: User;
    status: 'liked' | 'disliked';
}

export interface Dish {
   "_id": string;
    "dishName": string;
    "chef": User;
    "description": string;
    "imageUrl": string;
    "ingredients": string[];
    "instructions": string[];
    "dietaryPreferences": string[];
    "cookingTime": number;
    "servings": number;
    "cookingSkillLevel": string;
    "reactions": Reaction[];
    "createdAt": string;
    "updatedAt": string;
    "__v": number;
}
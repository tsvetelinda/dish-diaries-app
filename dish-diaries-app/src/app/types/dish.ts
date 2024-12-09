import { User } from "./user";

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
    "createdAt": string;
    "updatedAt": string; //Add the reactions!
    "__v": number;
}
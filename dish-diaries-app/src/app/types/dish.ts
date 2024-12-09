export interface Dish {
   "_id": string;
    "dishName": string;
    "chefName": string; // FIX ME once I have the user model
    "description": string;
    "imageUrl": string;
    "ingredients": string[];
    "instructions": string[];
    "dietaryPreferences": string[];
    "cookingTime": number;
    "servings": number;
    "cookingSkillLevel": string;
    "createdAt": string;
    "updatedAt": string;
    "__v": number;
}
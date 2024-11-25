export interface Dish {
   "_id": string;
    "dishName": string;
    "chefName": string; // FIX ME once I have the user model
    "ingredients": string[];
        "instructions": string[];
        "dietaryPreferences": string[];
        "cookingTime": number;
        "numberOfServings": number;
        "cookingSkillLevel": string;
        "createdAt": string;
        "updatedAt": string;
        "__v": number;
}
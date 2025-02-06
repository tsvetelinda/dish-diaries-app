export interface User {
    "_id": string;
    "email": string;
    "password": string;
    "chefName": string;
    "favCuisine": string;
    "cookingSkillLevel": string;
    "created_at": string;
    "updatedAt": string;
    "__v": number;
}

export interface UserForAuth {
    "_id": string;
    "email": string;
    "chefName": string;
    "favCuisine": string;
    "cookingSkillLevel": string;
}
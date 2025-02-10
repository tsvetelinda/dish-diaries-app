import { Dish } from "./dish";
import { UserForAuth } from "./user";

export interface EditDishResult {
    showEdit: boolean;
    updatedDish: Dish;
    user: UserForAuth;
}
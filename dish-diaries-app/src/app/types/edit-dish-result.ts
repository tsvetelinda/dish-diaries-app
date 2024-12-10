import { Dish } from "./dish";

export interface EditDishResult {
    showEdit: boolean;
    updatedDish: Dish;
}
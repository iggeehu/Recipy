import submitRecipe from "./newRecipe";
import { combineReducers } from "redux"; 

export default function(){
    
    return combineReducers({
    submitRecipes: submitRecipe})
}
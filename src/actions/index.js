import {SUBMIT_RECIPE} from "./types.js"

export function submitRecipe(recipe){
   return {
       type: SUBMIT_RECIPE,
       payload: recipe
   }

}
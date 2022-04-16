import {SUBMIT_RECIPE, CHANGE_AUTH} from "./types.js"

export function submitRecipe(recipe){
   return {
       type: SUBMIT_RECIPE,
       payload: recipe
   }

}

export function changeAuth(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}
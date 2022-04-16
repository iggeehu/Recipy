
import {SUBMIT_RECIPE, CHANGE_AUTH} from "../actions/types"
import { combineReducers } from "redux"

export default combineReducers({recipe: recipeReducer, auth: authReducer})

function recipeReducer (state=[], action){
    switch(action.type){
        case SUBMIT_RECIPE:
            console.log("reducer invoked");
            return [...state, action.payload];
            
        default:
            return state;
    }
}

function authReducer(state=false, action){
    switch(action.type){
        case CHANGE_AUTH:
            return action.payload
        default:
            return state;
    }
}

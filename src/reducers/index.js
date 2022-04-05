
import {SUBMIT_RECIPE} from "../actions/types"

const initialState={
    myRecipes: []
}

export default function(state=initialState, action){
    switch(action.type){
        case SUBMIT_RECIPE:
            console.log("reducer invoked")
            const newState={...state}
            newState.myRecipes.push(action.payload)
            return newState; 
        default:
            return state;
    }
}
import {SUBMIT_RECIPE} from "../actions/types"


export default function(state=[], action){
    switch(action.type){
        case SUBMIT_RECIPE:
            return [...state, action.payload] 
        default:
            return state
    }
}
import {createStore} from "redux";
import reducers from "../reducers";

const store=createStore(reducers, {myRecipes:[]})


const currentState=store.getState()

export {store, currentState}
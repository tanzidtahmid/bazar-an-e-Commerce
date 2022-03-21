import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./Reducers/CartReducer";

const combineReducer = combineReducers({
    CartReducer,
})

export const store = createStore(combineReducer,composeWithDevTools())
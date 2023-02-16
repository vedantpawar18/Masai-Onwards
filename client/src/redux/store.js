import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducer";


export const root = combineReducers({
    auth:authReducer
})


export const store = legacy_createStore(
root,
applyMiddleware(thunk)
)
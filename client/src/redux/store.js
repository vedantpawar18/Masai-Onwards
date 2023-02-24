import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer, dataReducer } from "./reducer";


export const root = combineReducers({
    auth:authReducer,
    data:dataReducer
})


export const store = legacy_createStore(
root,
applyMiddleware(thunk)
)
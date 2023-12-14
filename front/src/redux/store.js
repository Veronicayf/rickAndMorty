import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
//activar extencion de google chrome

// const reducers = combineReducers({favorite: reducer}) // investigar!!

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); 

export default store
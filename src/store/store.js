import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { compose } from "@reduxjs/toolkit";
import { rootReducer } from '../services/reducers/index';



const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
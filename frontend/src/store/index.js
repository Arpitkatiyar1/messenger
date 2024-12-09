import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({});

const store = configureStore({
    reducer: rootReducer, // Add your root reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Enable Redux DevTools in development mode
});

export default store;



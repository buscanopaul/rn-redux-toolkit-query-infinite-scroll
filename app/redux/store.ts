import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import api from "./api";


const rootReducers = combineReducers({
    [api.reducerPath]: api.reducer
})

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
   
    }).concat(api.middleware)
})

setupListeners(store.dispatch)

export default store
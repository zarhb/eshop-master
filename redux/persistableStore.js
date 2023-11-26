import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import shoppingCartReduser from './slices/shoppingCart/shoppingCartSlice';
import usersReduser from './slices/users/usersSlice';



  const localStorageConfig ={
    key:"root",
    storage : localStorage,
    blacklist:["user"]
  }
  const sessionStorageConfig ={
    key:"user",
    storage : sessionStorage,
  }

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReduser,
  user : persistReducer(sessionStorageConfig,usersReduser)
});

const persistedReducer = persistReducer(localStorageConfig, rootReducer);

export const persistableStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(persistableStore);
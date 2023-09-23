import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';


 import recipes from '../state/slices/recipeSlice';
 import user from '../state/slices/userSlice';
 import mode from '../state/slices/modeSlice';
 import notification from './slices/notificationSlice';
 import intercepto from "./slices/interceptoSlice";
 import vivienda from './slices/viviendaSlice';
 import contador from './slices/contadorSlice';




// Todos los  (Slices)

const rootReducer = combineReducers({
  mode: mode,
  recipes: recipes,
  user: user,
  notification: notification,
  intercepto:intercepto,
  vivienda:vivienda,
  contador:contador,
  
});

const localStorageConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['mode'] // especifica aquí los reductores que quieres persistir en Local Storage
};

const sessionConfig = {
  key: 'session',
  storage: sessionStorage,
  whitelist: ['user'] // especifica aquí los reductores que quieres persistir en Session Storage
};


 const localStorageReducer = persistReducer(localStorageConfig, combineReducers({
  mode: mode,
  recipes: recipes,
  
  
}));


const sessionReducer = persistReducer(sessionConfig, combineReducers({
  user: user,
}));



export const store = configureStore({
  reducer: persistReducer(localStorageConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const sessionStore = configureStore({
  reducer: sessionReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

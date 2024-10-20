import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import typeRoomSlice from "./Slice/typeRoomSlice";
import roomSlice from "./Slice/roomSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],
  }
  const rootReducer = combineReducers({
    auth: authSlice,
    typeRoom: typeRoomSlice,
    room: roomSlice
  })
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
export  let persistor = persistStore(store)
import { combineReducers } from "redux";
import contactsReduser from "./contacts/contacts-reduser";
import authSlice from "./auth/auth-slice";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReduser = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  contacts: contactsReduser,
});

const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);
export { store, persistor };

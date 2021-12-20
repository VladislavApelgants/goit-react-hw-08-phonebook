import { combineReducers } from 'redux';
import contactsReduser from './contacts/contacts-reduser';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReduser = combineReducers({
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
export { store };

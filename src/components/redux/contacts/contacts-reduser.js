import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from './contacts-actions';
import {
  fetchContacts,
  addContactsItem,
  deleteContacts,
} from './contacts-operations';

const contactsFilter = createReducer('', {
  [filterAction]: (state, { payload }) => payload,
});

const contactsItem = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,

  [addContactsItem.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },

  [deleteContacts.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { error }) => console.log(error),
  [fetchContacts.pending]: null,

  [addContactsItem.rejected]: (_, { error }) => console.log(error),
  [addContactsItem.pending]: null,

  [deleteContacts.rejected]: (_, { error }) => console.log(error),
  [deleteContacts.pending]: null,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContactsItem.pending]: () => true,
  [addContactsItem.fulfilled]: () => false,
  [addContactsItem.rejected]: () => false,

  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

export default combineReducers({
  filter: contactsFilter,
  item: contactsItem,
  error,
  loading,
});

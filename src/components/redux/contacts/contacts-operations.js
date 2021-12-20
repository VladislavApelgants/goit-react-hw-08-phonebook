import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61b8d87738f69a0017ce5dbc.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const resp = await axios.get('./contacts/contacts');
    return resp.data;
  },
);

export const addContactsItem = createAsyncThunk(
  'contacts/contactsItem',
  async text => {
    const item = {
      name: text.name,
      phone: text.phone,
    };

    const resp = await axios.post('/contacts/contacts', item);
    return resp.data;
  },
);

export const deleteContacts = createAsyncThunk('contacts/delete', async id => {
  await axios.delete(`/contacts/contacts/${id}`);
  return id;
});

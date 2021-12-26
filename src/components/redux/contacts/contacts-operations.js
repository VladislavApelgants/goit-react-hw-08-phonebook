import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const resp = await axios.get("./contacts");
    return resp.data;
  }
);

export const addContactsItem = createAsyncThunk(
  "contacts/contactsItem",
  async (text) => {
    const item = {
      name: text.name,
      number: text.phone,
    };

    const resp = await axios.post("/contacts", item);
    return resp.data;
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

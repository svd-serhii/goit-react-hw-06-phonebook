import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const contact = {
        id: nanoid(10),
        name: action.payload.name,
        number: action.payload.number,
      };
      const normalize = action.payload.name.toLowerCase();
      const isNameInList = state.find(
        contact => contact.name.toLowerCase() === normalize
      );
      if (isNameInList) {
        return alert(`${action.payload.name} is already in contacts.`);
      }
      return [...state, contact];
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
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
export default contactsSlice.reducer;

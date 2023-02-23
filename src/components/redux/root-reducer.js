import { combineReducers } from '@reduxjs/toolkit';

import { contactsSlice } from './contacts/contacts-slice';
import { filterSlice } from './filter/filter-slice';

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

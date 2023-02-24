import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contacts-slice';
import { filterSlice } from './filter/filter-slice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

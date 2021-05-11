import { createSelector } from "reselect";

export const getContacts = store => store.contacts;

export const getFilter = store => store.phonebook.filter;

export const filteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => contacts.filter(el => el.name.includes(filter))
);

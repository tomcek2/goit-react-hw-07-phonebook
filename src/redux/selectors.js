import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectError = state => state.contact.error;
export const selectContact = state => state.contact.items;
export const selectIsLoading = state => state.contact.isLoading;

export const filteredContacts = createSelector(
  [selectContact, selectFilter],
  (contact, filter) => {
    const filterLower = filter.toLowerCase();
    if (!filterLower) {
      return contact;
    }

    const filteredList = contact.filter(cont => {
      return cont.name.toLowerCase().includes(filterLower);
    });
    return filteredList;
  }
);

import types from "./types";

export const addContact = contact => ({
  type: types.ADD_CONTACT,
  payload: {
    contact
  }
});
export const saveFilter = value => ({
  type: types.SAVE_FILTER,
  payload: {
    value
  }
});
export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id
  }
});

export const getIsAuth = store => store.isAuth;
export const getIsLoading = store => store.isLoading;
export const getError = store=> store.error
export const getToken =store=> store.token
export const getUser = store=>store.user

export const getUsers = store => store.users;

export const getProfiles = store => store.profiles;

export const getNotification = store=>store.notification

// export const getFilter = store => store.users.filter;

// export const filteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => contacts.filter(el => el.name.includes(filter))
// );

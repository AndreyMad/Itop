import { combineReducers } from 'redux';
import authReducers from './Auth/authReducers';
import usersReducers from './Users/usersReducer';
import storage from 'redux-persist/lib/storage';
import {  persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducers),
  users: usersReducers,
});

export default rootReducer;

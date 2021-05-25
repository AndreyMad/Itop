import Reducers from './Reducers';
import storage from 'redux-persist/lib/storage';
import {  persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReducer =persistReducer(persistConfig, Reducers)



export default rootReducer;

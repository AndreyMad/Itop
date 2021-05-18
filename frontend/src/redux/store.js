import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';


const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));



export const  store = createStore(rootReducer, enhancer);;
export const persistore = persistStore(store);

/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store, persistore} from "./redux/store.js";
import App from "./components/App.jsx";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

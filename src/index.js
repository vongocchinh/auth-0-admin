import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import myReducer from './myReducer/index';
import firebase from './config/config';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore ,compose} from 'redux';
import { getFirebase ,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
  myReducer,
  composeEnhancer(applyMiddleware(thunk.withExtraArgument({getFirebase})))
);
 const fbProps={
   firebase,
   config:{},
   dispatch:store.dispatch, 
   createFirestoreInstance
 }
ReactDOM.render(
  <Auth0Provider
    domain="dev-p69f7n8w.us.auth0.com"
    clientId="HHpE2ZTTsu3KqnFvQsKOqz6zmMLwAQqe"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...fbProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);


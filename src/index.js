import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import './index.css';
import Application from './app';
import * as serviceWorker from './serviceWorker';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const APP_ROOT_NODE = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <Application />
</Provider>, APP_ROOT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

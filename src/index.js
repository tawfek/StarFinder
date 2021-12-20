import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById("root"));
serviceWorker.register();

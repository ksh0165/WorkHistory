import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MainPage from "./views/Main.js";
import DetailsPage from "./views/Details.js";
import AddCityPage from "./views/AddCity.js";
import LoginPage from "./views/Login.js";
import store from "./store";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/add" component={AddCityPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

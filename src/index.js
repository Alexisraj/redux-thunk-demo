import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UserContainer from "./containers/userContainer";
import configureStore from "./configureStore";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <UserContainer />
  </Provider>,
  document.getElementById("root")
);

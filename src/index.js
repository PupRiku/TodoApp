import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";
import firebase from "./Firebase/Firebase";

import App from "./App";
// object containing Firebase config
const rrfConfig = { userProfile: "users", useFirebaseForProfile: true }; // react-redux-firebase config

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

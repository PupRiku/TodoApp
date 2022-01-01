import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import styled from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";
import firebase from "./Firebase/Firebase";

import App from "./App";
import Loader from "./components/UI/Loader/Loader";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById("root");

// object containing Firebase config
const rrfConfig = {
  userProfile: "users",
  useFirebaseForProfile: true,
  attachAuthIsReady: true,
}; // react-redux-firebase config

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Loader />
        </Wrapper>
      </ThemeProvider>
    );
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <>
              <App />
              <GlobalStyles />
            </>
          </ThemeProvider>
        </BrowserRouter>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  root
);

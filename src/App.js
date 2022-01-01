import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/Layout";
import Login from "./containers/Auth/Login/Login";
import SignUp from "./containers/Auth/SignUp/SignUp";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

const App = ({ loggedIn }) => {
  let routes;
  if (loggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>;
  }

  return (
    <Layout>
      {routes}
    </Layout>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
});

export default connect(mapStateToProps)(App);

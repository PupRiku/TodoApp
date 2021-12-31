import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./hoc/layout/Layout";
import Login from "./containers/Auth/Login/Login";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;

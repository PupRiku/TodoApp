import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

import Layout from "./hoc/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/todos" element={Todos} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;

import React from "react";
import { Routes, Route, Link, useRoutes, NavLink, useLocation } from "react-router-dom";
import NavigationPanel from "./navigationPanel";
import BaseList from "./baseList";

function App() {
  return (
    <div className="app">
      <NavigationPanel />

      <Routes>
        <Route path="/" element={<BaseList />}></Route>
        <Route path="/characters" element={<BaseList />}></Route>
        <Route path="/episode" element={<BaseList />}></Route>
        <Route path="/location" element={<BaseList />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationPanel from "./navigationPanel";
import BaseList from "./baseList";

function App() {
  return (
    <div className="app">
      <NavigationPanel />

      <Routes>
        <Route path="/" element={<BaseList page="home" key={4} />} />
        <Route path="/characters/*" element={<BaseList page="characters" key={1} />} />
        <Route path="/episode/*" element={<BaseList page="episode" key={2} />} />
        <Route path="/location/*" element={<BaseList page="location" key={3} />} />
      </Routes>
    </div>
  );
}

export default App;

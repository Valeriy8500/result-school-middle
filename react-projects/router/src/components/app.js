import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationPanel from "./navigationPanel";
import BaseList from "./baseList";
import NotFound from "./notFound";

function App() {
  return (
    <div className="app">
      <NavigationPanel />

      <Routes>
        <Route path="/" element={<BaseList page="home" />} />
        <Route path="/characters/*" element={<BaseList page="characters" />} />
        <Route path="/episode/*" element={<BaseList page="episode" />} />
        <Route path="/location/*" element={<BaseList page="location" />} />
        <Route path="*" element={<NotFound page="home" />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationPanel from "./navigationPanel";
import BaseList from "./baseList";
import NotFound from "./notFound";
import Login from "./signin";
import Home from "./home";
import { AuthProvider } from "./authProvider";
import { PrivateRoute } from "./privateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavigationPanel />

        <Routes>
          <Route path="/" element={<BaseList page="home" />} />
          <Route path="/characters/*" element={<PrivateRoute><BaseList page="characters" /></PrivateRoute>} />
          <Route path="/episode/*" element={<PrivateRoute><BaseList page="episode" /></PrivateRoute>} />
          <Route path="/location/*" element={<PrivateRoute><BaseList page="location" /></PrivateRoute>} />
          <Route path="/signin" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound page="home" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

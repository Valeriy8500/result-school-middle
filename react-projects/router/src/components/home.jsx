import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthStatus } from "./authStatus";

const Home = () => {
  const location = useLocation();

  console.log('location: ', location);

  return (
    <div className="home">
      <h2 className="main-title">Добро пожаловать во вселенную Рика и Морти!</h2>
      <AuthStatus />
      <NavLink to="/signin" className="signin">Зарегистрироваться</NavLink>
    </div>
  );
}

export default Home;

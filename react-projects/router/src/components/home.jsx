import React from "react";
import { NavLink } from "react-router-dom";
import { AuthStatus } from "./authStatus";

const Home = () => {
  return (
    <div className="home">
      <h2 className="main-title">Добро пожаловать во вселенную Рика и Морти!</h2>
      <AuthStatus />
      <NavLink to="/signin" className="signin">Зарегистрироваться</NavLink>
    </div>
  );
}

export default Home;

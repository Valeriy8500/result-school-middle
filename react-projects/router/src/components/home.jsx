import React from "react";
import { NavLink } from "react-router-dom";
import { AuthStatus } from "./authStatus";

const Home = () => {
  return (
    <>
      <h2 className="main-title">Добро пожаловать во вселенную Рика и Морти!</h2>
      <AuthStatus />
      <NavLink to="/signin">Зарегистрироваться</NavLink>
    </>
  );
}

export default Home;

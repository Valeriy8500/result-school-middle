import React from "react";
import { NavLink } from "react-router-dom";
import { AuthStatus } from "../../components/authStatus/authStatus";
import { Button } from '@mantine/core';

function Home() {
  return (
    <div className="home">
      <h2 className="main-title">Добро пожаловать во вселенную Рика и Морти!</h2>
      <AuthStatus />
      <NavLink to="/signin"><Button type="button" className="signin-btn">Зарегистрироваться</Button></NavLink>
    </div>
  );
}

export default Home;


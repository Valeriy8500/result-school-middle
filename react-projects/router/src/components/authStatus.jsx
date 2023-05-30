import React from "react";
import { useAuth } from "./authProvider";

export function AuthStatus() {
  const auth = useAuth();

  if (auth.user === null) {
    return <h3 className="title">Для работы приложения нужно зарегистрироваться:</h3>
  }

  console.log('auth.user: ', auth.user);
  return (
    <h3 className="title">Добро пожаловать {auth.user.name}</h3>
  );
}
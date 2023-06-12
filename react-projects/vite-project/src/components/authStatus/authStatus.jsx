import React from "react";
import { useAuth } from "../../context/authProvider";

export function AuthStatus() {
  const auth = useAuth();

  if (auth.user === null) {
    return <h3 className="title">Для работы приложения нужно зарегистрироваться:</h3>
  }

  return (
    <h3 className="title">Приветствуем тебя {auth.user.name}</h3>
  );
}
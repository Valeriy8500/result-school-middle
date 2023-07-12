import React, { createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return React.useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const signin = (newUser, callBack) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    callBack();
  };

  const value = {
    user,
    signin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [promocode, setPromocode] = useState("");

  const logIn = (userName, userPassword) => {
    setUser(userName);
    setPassword(userPassword);
    setLogged(true);
  };

  const logOut = () => {
    setUser("");
    setPassword("");
    setLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        password,
        logIn,
        logged,
        logOut,
        promocode,
        setPromocode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

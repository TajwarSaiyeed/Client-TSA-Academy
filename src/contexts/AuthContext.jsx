import React, { createContext } from "react";

const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const authInfo = {};
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;

/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleLogin = (Provider) => {
    setLoader(true);
    return signInWithPopup(auth, Provider);
  };

  const githubLogin = (Provider) => {
    setLoader(true);
    return signInWithPopup(auth, Provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsub();
    };
  }, []);

  const authInfo = {
    googleLogin,
    githubLogin,
    logOut,
    user,
    loader,
    setLoader,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;

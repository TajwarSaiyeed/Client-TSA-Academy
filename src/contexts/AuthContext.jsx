/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
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

  const registerWithEmailPassword = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateNamePhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logInWithEmailPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (
        currentUser === null ||
        currentUser.email === null ||
        currentUser.emailVerified === true
      ) {
        setUser(currentUser);
      }
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
    registerWithEmailPassword,
    updateNamePhoto,
    logInWithEmailPassword,
    verifyEmail,
    darkMode,
    setDarkMode,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;

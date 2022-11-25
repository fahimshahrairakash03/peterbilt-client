import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.init.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("on state User", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    googleSignIn,
    logOut,
    updateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

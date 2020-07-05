import React, { useReducer, useEffect } from "react";
import AppRoute from "./routes/AppRoute";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    console.log("cambio el user");
    // return () => {
    //   console.log("se limpio el main app");
    // };
  }, [user]);
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRoute></AppRoute>
      </AuthContext.Provider>
    </>
  );
};

import React, { useContext } from "react";
import { types } from "../types/authTypes";
import { AuthContext } from "../auth/AuthContext";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    var root = localStorage.getItem("lastpath") || "/";
    if (root === "/") {
      localStorage.removeItem("param");
    }
    if (root !== "/" || root.length > 1) {
      if(localStorage.getItem('param')!==null)
      {
        root = root + localStorage.getItem("param") || "";
      }
    }
    dispatch({
      type: types.LOGIN,
      payload: { name: "Leudi Rosario, Reactjs" },
    });
    history.replace(root);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <p></p>
      <hr />
      <div className="col-md-12">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn btn-outline-primary btn-block"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

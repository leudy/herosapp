import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
};

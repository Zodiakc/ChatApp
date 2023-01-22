import React from "react";
import "../styles/Login.scss";
const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="#" className="login__form">
        <input
          type="email"
          name=""
          id=""
          className="login__input"
          placeholder="Email"
        />
        <input
          type="password"
          className="login__input"
          placeholder="Password"
        />
        
        <button type="submit" className="login__btn">Log in</button>
      </form>
      <p>
        Or <a href="#">Register</a>
      </p>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Login/login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const logged = (e) => {
    e.preventDefault();
    if (name.length > 0 && password.length > 0) {
      history.push("/main");
    } else history.push("#");
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="top"></div>
        <h2>Login</h2>
        <form>
          <div className="container">
            <input
              className="text"
              value={name}
              type="text"
              placeholder="Username"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="password"
              value={password}
              type="password"
              placeholder="Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="buttons">
              <button onClick={logged} className="login-button" type="button">
                Login
              </button>
              <button
                onClick={() => {
                  history.push("/signup");
                }}
                className="sign-up-button"
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

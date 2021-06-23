import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOGIN_BASLANGIC } from "../../utils/Consts.js";
import { login } from "../../utils/FetchData";
import Loading from "../../assets/Loading.gif";
import "../Login/login.css";

const Login = () => {
  const [user, setUser] = useState(LOGIN_BASLANGIC);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(user, setUser, history, setLoading, setError);
  };
  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="top"></div>
        <h2>Login</h2>
        <form onSubmit={submit}>
          <div className="container">
            <input
              className="text"
              value={user.email}
              name="email"
              type="text"
              placeholder="E-mail"
              onChange={handleOnChange}
              required
            />
            <input
              className="password"
              value={user.password}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
              required
            />
            <div className="buttons">
              <button className="login-button" type="submit">
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
              {loading && (
                <img
                  src={Loading}
                  alt="loading..."
                  style={{ width: "100px" }}
                />
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

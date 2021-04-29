import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "../pages/Main";
import "../styles/login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const logged = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="top"></div>
        <h2>Kullanıcı Girişi</h2>
        <form>
          <div class="container">
            <input
              value={name}
              type="text"
              placeholder="İsim"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              value={password}
              type="password"
              placeholder="Şifre"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link to={name.length > 0 && password.length > 0 ? "/main" : "#"}>
              <button onclick={logged} className="login-button" type="submit">
                GİRİŞ
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

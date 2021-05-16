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
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="top"></div>
        <h2>Kullanıcı Girişi</h2>
        <form>
          <div class="container">
            <input
              className="text"
              value={name}
              type="text"
              placeholder="İsim"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="password"
              value={password}
              type="password"
              placeholder="Şifre"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link to={name.length > 0 && password.length > 0 ? "/main" : "#"}>
              <button onClick={logged} className="login-button" type="submit">
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

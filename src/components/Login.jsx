import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <div className="top"></div>
        <h2>Kullanıcı Girişi</h2>
        <form method="post">
          <div class="container">
            <input type="text" placeholder="İsim" name="name" required />
            <input type="password" placeholder="Şifre" name="psw" required />

            <button type="submit">GİRİŞ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

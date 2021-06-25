import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { register } from "../utils/FetchData";
import { REGISTER_BASLANGIC } from "../utils/Consts";
import Loading from "../assets/Loading.gif";
import "../styles/signup.css";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState(REGISTER_BASLANGIC);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    register(user, setUser, history, setLoading, setError);
    window.localStorage.setItem("name", `${user.name}`);
  };
  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-box">
          <div className="top"></div>
          <h2>Sign Up</h2>
          <form onSubmit={submit}>
            <div className="container">
              <input
                className="text"
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleOnChange}
                required
              />
              <input
                className="text"
                type="text"
                name="email"
                placeholder="E-mail"
                value={user.email}
                onChange={handleOnChange}
                required
              />
              <input
                className="password"
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleOnChange}
                required
              />
              <div className="buttons">
                <button className="signup-button">Sign up</button>
                {loading && (
                  <img
                    src={Loading}
                    alt="loading..."
                    style={{ width: "100px" }}
                  />
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div
                  className="back-button"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <FaArrowCircleLeft className="back-icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

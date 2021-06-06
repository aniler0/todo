import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "../styles/signup.css";
const Signup = () => {
  const history = useHistory();
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-box">
          <div className="top"></div>
          <h2>Sign Up</h2>
          <form>
            <div className="container">
              <input
                className="text"
                type="text"
                placeholder="Username"
                name="name"
                required
              />
              <input
                className="text"
                type="text"
                placeholder="E-mail"
                name="email"
                required
              />
              <input
                className="password"
                type="password"
                placeholder="Confirm Password"
                name="psw"
                required
              />
              <div className="buttons">
                <button className="signup-button">Sign up</button>

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

import React from "react";
import { useHistory } from "react-router-dom";
import Quote from "../Quote/Quote";
import "../TopBar/topbar.css";

const TopBar = ({ score }) => {
  const history = useHistory();
  const name = localStorage.getItem("name");

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Task Challenge</h1>
          <p>Score:{score}</p>
        </div>
        <div className="quote">
          <Quote />
        </div>
        <div className="topbar-right">
          <div className="profile">
            <h1>Hello {name}</h1>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                localStorage.removeItem("score");
                history.push("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;

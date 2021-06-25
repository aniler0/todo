import React from "react";
import { useHistory } from "react-router-dom";
import Quote from "../Quote/Quote";
import "../TopBar/topbar.css";

const TopBar = () => {
  const history = useHistory();
  let name = localStorage.getItem("name");
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <h1>100 GÜN KODLA</h1>
          <p>Gün 1</p>
        </div>
        <div className="quote">
          <Quote />
        </div>
        <div className="topbar-right">
          <div className="profile">
            <h1>name</h1>
            <button
              onClick={() => {
                localStorage.removeItem("token");
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

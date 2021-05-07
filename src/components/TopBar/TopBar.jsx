import React from "react";
import Quote from "../Quote/Quote";
import "../TopBar/topbar.css";

const TopBar = () => {
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
            <h1>Merhaba Anıl</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;

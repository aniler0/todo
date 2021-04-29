import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
const Tabs = () => {
  return (
    <div>
      <div className="tabs">
        <Link className="button active" to="/main">
          Yapılacaklar
        </Link>
        <Link className="button" to="/main/completed">
          Tamamlanmış
        </Link>
      </div>
    </div>
  );
};

export default Tabs;

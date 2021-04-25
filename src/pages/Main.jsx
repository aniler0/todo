import React from "react";
import Boxes from "../components/Boxes";
import "../styles/main.css";

const Main = () => {
  let gun = 5;
  let date = new Date();
  let dateValue = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  const { day, month, year } = dateValue;
  return (
    <div className="main">
      <div className="top">
        <h1 className="h1">Bugün serinin {gun}.günü</h1>
        <h1 className="h2">
          Tarih: {day}.{month}.{year}
        </h1>
      </div>

      <div className="middle">
        <div className="day-box">
          <Boxes />
        </div>

        <div className="mid-right"></div>
      </div>
    </div>
  );
};

export default Main;

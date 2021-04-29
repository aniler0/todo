import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Tabs from "../components/Tabs";
import Completed from "../pages/Completed";
import TaskList from "../components/TaskList";
import "../styles/main.css";

const Main = () => {
  let date = new Date();
  let dateValue = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  const { day, month, year } = dateValue;
  return (
    <div className="main">
      <div>asda</div>
      <div className="todo">
        <Tabs />
        <Route path="/main" exact component={TaskList} />
        <Route path="/main/completed" component={Completed} />
      </div>
    </div>
  );
};

export default Main;

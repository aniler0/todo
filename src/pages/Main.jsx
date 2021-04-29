import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Tabs from "../components/Tabs";
import Completed from "../pages/Completed";
import TaskList from "../components/TaskList";
import "../styles/main.css";
import TopBar from "../components/TopBar";

const Main = () => {
  return (
    <div className="main">
      <div className="top-bar">
        <TopBar />
      </div>
      <div className="todo">
        <Tabs />
        <Route path="/main" exact component={TaskList} />
        <Route path="/main/completed" component={Completed} />
      </div>
    </div>
  );
};

export default Main;

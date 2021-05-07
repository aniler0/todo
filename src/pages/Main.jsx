import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import Tabs from "../components/Tabs/Tabs";
import Completed from "../pages/Completed";
import TaskList from "../components/TaskList/TaskList";
import TopBar from "../components/TopBar/TopBar";
import "../styles/main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="top">
        <TopBar />
      </div>
      <div className="task">
        <AddTask />
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

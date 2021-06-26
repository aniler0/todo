import React from "react";
import Login from "../components/Login/Login";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Task Challenge</h1>
        <h3>
          Add your tasks, complete and get points from every completed task.
        </h3>
      </header>

      <Login />
    </div>
  );
};

export default Home;

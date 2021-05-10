import React from "react";
import "./task.css";

const Task = ({ task }) => {
  return (
    <>
      <div className="task">
        <h1 className="title">{task}</h1>
      </div>
    </>
  );
};

export default Task;

import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "../styles/add-task.css";

const AddTask = () => {
  return (
    <div className="add-task">
      <div className="button">
        <h1>Add Task</h1>
        <AiOutlinePlusSquare className="add-icon" />
      </div>
      <div className="text-area">
        <input className="input" type="text" />
      </div>
    </div>
  );
};

export default AddTask;

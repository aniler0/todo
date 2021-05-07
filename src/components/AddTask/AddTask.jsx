import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "../AddTask/add-task.css";

const AddTask = () => {
  return (
    <div className="add-task">
      <h1>Add Task</h1>
      <div className="add-bar">
        <input
          type="text"
          className="add-bar__input"
          placeholder="enter your task"
          aria-label="add"
        />
        <button className="add-bar__submit">
          <i aria-label="submit add">
            <AiOutlinePlusSquare className="add-icon" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default AddTask;

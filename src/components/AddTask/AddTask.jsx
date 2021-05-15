import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "../AddTask/add-task.css";

const AddTask = ({ task, setTask, tasks, setTasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    task &&
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          value: task,
        },
      ]);

    setTask("");
  };

  return (
    <div className="add-task">
      <h1>Add Task</h1>
      <div className="add-bar">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="add-bar__input"
          placeholder="enter your task"
          aria-label="add"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="add-bar__submit"
        >
          <i aria-label="submit add">
            <AiOutlinePlusSquare className="add-icon" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { newTask } from "../../utils/FetchData";
import Loading from "../../assets/Loading.gif";
import "../AddTask/add-task.css";

const AddTask = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    newTask(task, setLoading);
  };
  return (
    <div className="add-task">
      <h1>Add Task</h1>
      {loading && <img src={Loading} alt="loading..." />}

      <form onSubmit={submit} className="add-bar">
        <input
          type="text"
          value={task}
          onChange={handleOnChange}
          className="add-bar__input"
          placeholder="enter your task"
          aria-label="add"
        />
        <button type="submit" className="add-bar__submit">
          <i aria-label="submit add">
            <AiOutlinePlusSquare className="add-icon" />
          </i>
        </button>
      </form>
    </div>
  );
};

export default AddTask;

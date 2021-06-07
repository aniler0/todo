import React, { useState } from "react";

import { deleteData } from "../../utils/FetchData";

import "../TaskList/task-list.css";
import Task from "../Task/Task";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    const deletedTask = tasks.filter((t) => id !== t.id);
    deleteData(id);
    setTasks(deletedTask);
  };

  return (
    <>
      <div className="task-lisk">
        {tasks.map((task, index) => (
          <Task task={task} key={index} setTasks={setTasks} />
        ))}
      </div>
    </>
  );
};

export default TaskList;

import React, { useState } from "react";
import Task from "../Task/Task";
import "../TaskList/task-list.css";

const TaskList = ({ tasks, setTasks }) => {
  const completeTask = (task) => {};

  const deleteTask = (id) => {
    const deletedTask = tasks.filter((t) => id !== t.id);
    setTasks({ tasks: deletedTask });
  };
  return (
    <>
      <div className="task-lisk">
        {tasks.map((task) => (
          <Task key={task.id} value={task.value} onDelete={deleteTask} />
        ))}
      </div>
    </>
  );
};

export default TaskList;

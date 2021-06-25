import React, { useState } from "react";
import { deleteData } from "../../utils/FetchData";
import Task from "../Task/Task";
import "../TaskList/task-list.css";

const TaskList = ({ setTasks, tasks }) => {
  return (
    <>
      <div className="task-list">
        {tasks &&
          tasks.map((task, index) => (
            <Task task={task} key={index} setTasks={setTasks} tasks={tasks} />
          ))}
      </div>
    </>
  );
};

export default TaskList;

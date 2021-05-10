import React from "react";
import Task from "../Task/Task";
import "../TaskList/task-list.css";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div className="task-lisk">
        {tasks.map((task) => (
          <Task task={task.value} />
        ))}
      </div>
    </>
  );
};

export default TaskList;

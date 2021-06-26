import React from "react";
import Task from "../Task/Task";
import "../TaskList/task-list.css";

const TaskList = ({ setTasks, tasks, setScore }) => {
  return (
    <>
      <div className="task-list">
        {tasks &&
          tasks
            .filter((task) => task.completed === false)
            .map((task, index) => (
              <Task
                task={task}
                key={index}
                setTasks={setTasks}
                tasks={tasks}
                setScore={setScore}
              />
            ))}
      </div>
    </>
  );
};

export default TaskList;

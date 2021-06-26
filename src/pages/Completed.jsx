import React from "react";
import "../components/Task/task.css";
import "../components/TaskList/task-list.css";

const Completed = ({ setTasks, tasks }) => {
  return (
    <>
      <div className="task-list">
        {tasks &&
          tasks
            .filter((task) => task.completed === true)
            .map((filteredTasks, key) => (
              <ul key={key} className="task">
                <h1 className="title">{filteredTasks.title}</h1>
              </ul>
            ))}
      </div>
    </>
  );
};

export default Completed;

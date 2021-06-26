import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import "../Task/task.css";
import { deleteData, updateTask } from "../../utils/FetchData";

const Task = ({ task, setTasks, setScore }) => {
  const id = task._id;

  return (
    <div>
      {
        <ul key={task.id} className="task">
          <h1 className="title">{task.title}</h1>
          <div className="selection">
            <button
              onClick={() => deleteData(id, setTasks, setScore)}
              className="selection__button"
            >
              <i title="Delete">
                <AiOutlineClose className="delete" />
              </i>
            </button>
            <button
              onClick={() => {
                updateTask(id, setTasks, setScore);
              }}
              className="selection__button"
            >
              <i title="Complete">
                <FcCheckmark className="completed" />
              </i>
            </button>
          </div>
        </ul>
      }
    </div>
  );
};

export default Task;

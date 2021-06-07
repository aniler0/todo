import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import "../Task/task.css";

const Task = ({ task }) => {
  return (
    <div>
      <ul key={task.id} className="task">
        <h1 className="title">{task.title}</h1>
        <div className="selection">
          <button className="selection__button">
            <i title="Delete">
              <AiOutlineClose className="delete" />
            </i>
          </button>
          <button className="selection__button">
            <i title="Complete">
              <FcCheckmark className="completed" />
            </i>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Task;

import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import "./task.css";

const Task = ({ task }) => {
  const { isCompleted, setCompleted } = useState();
  const completeTask = () => {};
  const deleteTask = () => {};

  return (
    <>
      <div className="task">
        <h1 className="title">{task}</h1>
        <div className="selection">
          <button className="selection__button">
            <i>
              <AiOutlineClose className="delete" />
            </i>
          </button>
          <button onClick={completeTask} className="selection__button">
            <i>
              <FcCheckmark className="completed" />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;

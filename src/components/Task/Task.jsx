import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import "./task.css";

const Task = ({ key, value, onDelete }) => {
  return (
    <>
      <div className="task">
        <h1 className="title">{value}</h1>
        <div className="selection">
          <button onClick={() => onDelete(key)} className="selection__button">
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
      </div>
    </>
  );
};

export default Task;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
const Tabs = () => {
  const refDo = useRef();
  const refDone = useRef();
  const [active, setActive] = useState(true);

  const button1 = () => {
    refDone.current.className = `button`;
    if (active === true) {
      refDo.current.className = `button active`;
    }
  };
  const button2 = () => {
    refDo.current.className = `button`;
    if (active === true) {
      refDone.current.className = `button active`;
    }
  };

  return (
    <div>
      <div className="tabs">
        <Link
          ref={refDo}
          onClick={button1}
          className={`button active ${active}`}
          to="/main"
        >
          Yapılacaklar
        </Link>
        <Link
          ref={refDone}
          onClick={button2}
          className="button"
          to="/main/completed"
        >
          Tamamlanmış
        </Link>
      </div>
    </div>
  );
};

export default Tabs;

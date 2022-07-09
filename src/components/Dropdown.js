import { useState } from "react";
import "../style/Dropdown.css";
import arrow from "../assets/arrow.svg";

function Dropdown(props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={
        props.size === "medium"
          ? "dropdown"
          : props.size === "large"
          ? "dropdown large"
          : "dropdown"
      }
    >
      <div className="dropdown_button" onClick={() => setActive(!active)}>
        {props.title}
        <img
          className={!active ? "arrow" : "arrow active"}
          src={arrow}
          alt="dropdown button"
        />
      </div>
      <div className={!active ? "dropdown_content" : "dropdown_content active"}>
        {props.children}
      </div>
    </div>
  );
}
export default Dropdown;

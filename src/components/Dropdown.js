import { useState } from "react";
import "../style/Dropdown.css";
import arrow from "../assets/arrow.svg";

function Dropdown({ element, type }) {
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown_button" onClick={() => setActive(!active)}>
        {type === "description"
          ? "Description"
          : type === "Equipments"
          ? "Équipements"
          : ""}
        <img
          className={!active ? "arrow" : "arrow active"}
          src={arrow}
          alt="dropdown button"
        />
      </div>
      <div className={!active ? "dropdown_content" : "dropdown_content active"}>
        {type === "description"
          ? element
          : type === "Equipments"
          ? element.map((el, idx) => <li key={idx}>{el}</li>)
          : ""}
      </div>
    </div>
  );
}
export default Dropdown;

import { useState } from "react";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";
import "../style/Carrousel.css";

function Carrousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrease = () => {
    currentIndex < pictures.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handleDecrease = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(pictures.length - 1);
  };

  return (
    <div className="carrousel">
      <img
        src={arrowLeft}
        className={
          pictures.length > 2
            ? "carrousel_arrow left"
            : "carrousel_arrow left off"
        }
        alt="arrow left"
        onClick={handleDecrease}
      />
      {pictures &&
        pictures.map((picture, idx) => (
          <img
            key={idx}
            className={
              idx === currentIndex
                ? "carrousel_picture active"
                : "carrousel_picture"
            }
            src={picture}
            alt={title}
          />
        ))}
      <img
        src={arrowRight}
        className={
          pictures.length > 2
            ? "carrousel_arrow right"
            : "carrousel_arrow right off"
        }
        alt="arrow right"
        onClick={handleIncrease}
      />
    </div>
  );
}
export default Carrousel;

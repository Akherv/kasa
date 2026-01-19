import { Link } from "react-router-dom";
import "../style/Thumb.css";

function Thumb({ id, title, cover }) {
  return (
    <Link to={`/locations/${id}`}>
      <div className="thumb">
        <h2>{title}</h2>
        <img className="cover" src={cover} alt={title} />
      </div>
    </Link>
  );
}
export default Thumb;

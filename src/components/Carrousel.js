import "../style/Carrousel.css";

function Carrousel({ pictures, title }) {
  return (
    <div className="carrousel">
      {pictures &&
        pictures.map((picture, idx) => (
          <li key={idx}>
            <img className="carrousel" src={picture} alt={title} />
          </li>
        ))}
    </div>
  );
}
export default Carrousel;

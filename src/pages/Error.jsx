import { Link } from "react-router-dom";
import "../style/Error.css";

function Error() {
  return (
    <div className="error">
      <div className="message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'éxiste pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
export default Error;

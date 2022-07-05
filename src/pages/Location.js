import { useParams } from "react-router-dom";
import starRate from "../assets/star_rate.svg";
import starRateActive from "../assets/star_rate_active.svg";
import "../style/Location.css";

function Location({ locations }) {
  let { id } = useParams();

  const renderStar = (starNumber) => {
    let ul = [];
    for (let i = 0; i < starNumber; i++) {
      ul.push(
        <li key={i}>
          <img src={starRateActive} alt={`${starNumber} star`} />
        </li>
      );
    }
    if (ul.length < 5) {
      for (let i = starNumber; i < 5; i++) {
        ul.push(
          <li key={i}>
            <img src={starRate} alt={`${starNumber} star`} />
          </li>
        );
      }
    }
    return ul;
  };
  return (
    <div className="locations">
      {locations &&
        locations
          .filter((location) => location.id === id)
          .map((el, idx) => (
            <div key={idx}>
              <img className="carrousel" src={el.cover} alt={el.title} />
              <div className="informations_container">
                <div className="informations informations_1">
                  <h1>{el.title}</h1>
                  <p>{el.location}</p>
                  <ul>
                    {el.tags &&
                      el.tags.map((el, idx) => (
                        <li className="tag" key={idx}>
                          {el}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="informations informations_2">
                  <div className="host">
                    <p>{el.host.name}</p>
                    <img src={el.host.picture} alt={el.host.name} />
                  </div>
                  {<ul className="rating">{renderStar(`${el.rating}`)}</ul>}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
export default Location;

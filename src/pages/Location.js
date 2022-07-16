import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import starRate from "../assets/star_rate.svg";
import starRateActive from "../assets/star_rate_active.svg";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import "../style/Location.css";

function Location({ locations }) {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!locations.some((el) => el.id.includes(id))) {
      navigate("/notfound", { replace: true });
    }
  }, [locations, id, navigate]);

  const searchId = locations.some((el) => el.id.includes(id));
  if (!searchId) return null;

  const renderStar = (starNumber) => {
    let arr = [];
    for (let i = 0; i < starNumber; i++) {
      arr.push(
        <li key={i}>
          <img src={starRateActive} alt={`${starNumber} star`} />
        </li>
      );
    }
    if (arr.length < 5) {
      for (let i = starNumber; i < 5; i++) {
        arr.push(
          <li key={i}>
            <img src={starRate} alt={`${starNumber} star`} />
          </li>
        );
      }
    }
    return arr;
  };
  return (
    <>
      {locations &&
        locations
          .filter((location) => location.id === id)
          .map((el, idx) => (
            <div className="locations" key={idx}>
              <Carrousel {...el} />
              <div className="informations_container">
                <div className="informations informations_1">
                  <h1>{el.title}</h1>
                  <p>{el.location}</p>
                  <ul>
                    {el.tags &&
                      el.tags.map((el, idx) => <Tag key={idx} el={el} />)}
                  </ul>
                </div>
                <div className="informations informations_2">
                  <div className="host">
                    <p>
                      {el.host.name.split(" ")[0]}
                      <br />
                      {el.host.name.split(" ")[1]}
                    </p>
                    <img src={el.host.picture} alt={el.host.name} />
                  </div>
                  {<ul className="rating">{renderStar(el.rating)}</ul>}
                </div>
              </div>
              <div className="dropdown_container">
                <Dropdown title={"Description"} size="medium">
                  {el.description}
                </Dropdown>
                <Dropdown title={"Équipements"} size="medium">
                  {el.equipments.map((el, idx) => (
                    <li key={idx}>{el}</li>
                  ))}
                </Dropdown>
              </div>
            </div>
          ))}
    </>
  );
}
export default Location;

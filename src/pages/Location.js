import React, { useEffect, useMemo } from "react";
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

  //handle error route for locations/:id if :id doesn't exist in the DB
  useEffect(() => {
    if (!locations.some((el) => el.id === id)) {
      navigate("/notfound", { replace: true });
    }
  }, [locations, id, navigate]);

  //function to render the starNumber figure with img starRateActive and if they are under 5 complete with gray star until they reach 5
  const renderStar = (starNumber) => {
    let arrLi = [];
    for (let i = 0; i < starNumber; i++) {
      arrLi.push(
        <li key={i}>
          <img src={starRateActive} alt={`${starNumber} star`} />
        </li>
      );
    }
    if (arrLi.length < 5) {
      for (let i = starNumber; i < 5; i++) {
        arrLi.push(
          <li key={i}>
            <img src={starRate} alt={`${starNumber} star`} />
          </li>
        );
      }
    }
    return arrLi;
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
                  <p>
                    {el.location.split("-")[1]}, {el.location.split("-")[0]}
                  </p>
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

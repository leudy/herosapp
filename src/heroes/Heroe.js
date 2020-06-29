import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { getHeroesByI } from "../repositories/HeroesRepository";

export const Heroe = ({ history }) => {
  console.log(history);
  const { heroeid } = useParams();
  const heroe_response = getHeroesByI(heroeid);
  if (!heroe_response) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe_response;

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-4" style={{}}>
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="animate__animated animate__bounceInUp card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-6" style={{}}>
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <b>Author:</b> {publisher}
            </li>
            <li className="list-group-item">
              {" "}
              <b>Alter Ego:</b> {alter_ego}
            </li>
            <li className="list-group-item">
              {" "}
              <b>First appeance:</b>
              {first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{characters}</p>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              history.goBack();
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

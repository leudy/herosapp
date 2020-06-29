import React from "react";
import { Link } from "react-router-dom";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
      <div className="">
        <div className="card ms-3" style={{ maxWidth: 540 }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={`./assets/heroes/${id}.jpg`}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego} </p>
                {alter_ego !== characters && (
                  <p className="card-text"> {characters}</p>
                )}
                <p className="text-muted">{first_appearance}</p>
                <Link
                  to={`./heroe/${id}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  {" "}
                  Mas...{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

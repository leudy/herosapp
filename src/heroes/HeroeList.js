import React, { useMemo, Fragment } from "react";
import ProtoTypes from "prop-types";
import { getHeroesByPublisher } from "../repositories/HeroesRepository";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  const _heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <Fragment>
      <div className="card-columns animate__animated animate__bounceInUp">
        {_heroes.map((h) => (
          <HeroeCard key={h.id} {...h}></HeroeCard>
        ))}
      </div>
    </Fragment>
  );
};

HeroeList.propTypes = {
  publisher: ProtoTypes.string.isRequired,
};

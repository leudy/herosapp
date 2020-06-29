import React, { useEffect } from "react";
import ProtoTypes from "prop-types";
import { getHeroesByPublisher } from "../repositories/HeroesRepository";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  // console.log(publisher);
  const _heroes = getHeroesByPublisher(publisher);
  // useEffect(() => {
  //   console.log("Heroe List is load");
  //   return () => {
  //     console.log("heroe list was unload");
  //   };
  // }, [publisher]);
  return (
    <div className="card-columns animate__animated animate__bounceInUp">
      {_heroes.map((h) => (
        <HeroeCard key={h.id} {...h}></HeroeCard>
      ))}
    </div>
  );
};

HeroeList.propTypes = {
  publisher: ProtoTypes.string.isRequired,
};

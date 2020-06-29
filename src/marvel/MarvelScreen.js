import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const MarvelScreen = () => {
  // console.log("Marvel Screen is Mounted");
  return (
    <>
      <h2>Marvel </h2>
      <hr />
      <HeroeList publisher="Marvel Comics"></HeroeList>
    </>
  );
};

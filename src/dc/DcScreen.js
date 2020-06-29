import React, { Fragment } from "react";
import { HeroeList } from "../heroes/HeroeList";

export const DcScreen = () => {
  return (
    <Fragment>
      <h2>DC COMMIS </h2>
      <hr />
      <HeroeList publisher="DC Comics"></HeroeList>
    </Fragment>
  );
};

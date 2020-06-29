import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { Navbar } from "../shared/Navbar";
import { DcScreen } from "../dc/DcScreen";
import { Heroe } from "../heroes/Heroe";

export const ComicsRoute = () => {
  //console.log("comics route was load");
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeid" component={Heroe} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

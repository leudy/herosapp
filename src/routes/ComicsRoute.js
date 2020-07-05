import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { Navbar } from "../shared/Navbar";
import { DcScreen } from "../dc/DcScreen";
import { HeroeScreen } from "../heroes/HeroeScreen";
import { SearchComponent } from "../search/SearchComponent";

export const ComicsRoute = () => {
  //console.log("comics route was load");
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeid" component={HeroeScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchComponent} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

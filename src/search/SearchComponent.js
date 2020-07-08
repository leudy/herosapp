import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../hooks/useForm";
import { HeroeCard } from "../heroes/HeroeCard";
import { getHeroeByFilter } from "../repositories/HeroesRepository";

export const SearchComponent = ({ history }) => {
  const location = useLocation();
  const StringQuery = queryString.parse(location.search);
  const { q = "" } = StringQuery;
  const initialState = {
    criteriaText: q,
  };
  const [form, handleTextChange] = useForm(initialState);
  const data = useMemo(() => getHeroeByFilter(q), [q]);
  const { criteriaText } = form;
  
  const handleSubmit = (f) => {
    f.preventDefault();
    const filter = `?q=${criteriaText}`;
    history.push(filter);
  };

  return (
    <div>
      <h1>Search Screem</h1>
      <hr />
      <div className="row">
        <div className="col-md-5">
          <h4> Search form </h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={criteriaText}
                onChange={handleTextChange}
                type="text"
                name="criteriaText"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">
              Find
            </button>
          </form>
        </div>
        <div className="col-md-7">
          <h4>Result:</h4>
          <hr />
          {q === "" && (
            <div className="alert alert-info">
              <p>Search a heroe</p>
            </div>
          )}

          {q !== "" && data.length === 0 && (
            <div className="alert alert-danger">
              <p>
              there is no a heroe with {q} </p>
            </div>
          )}

          {data.map((h) => (
            <div className="animate__animated animate__bounceInUp" key={h.id}>
              <HeroeCard key={h.id} {...h}></HeroeCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

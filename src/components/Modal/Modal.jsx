import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { PokemonDetails } from "./PokemonDetails";
import { Error } from "../Error/Error";

import "./Modal.css";

export const Modal = ({ pokemons, modalStatus }) => {
  return (
    <Router>
      <div className="modal-container">
        <div className="modal-body">
          <div className="modal-body-close" onClick={modalStatus}>
            X
          </div>
          <ul className="modal-body-list">
            {pokemons.map((el, index) => {
              let url = String(el[0].id);
              return (
                <li
                  onDoubleClick={modalStatus}
                  className="modal-body-list-item"
                  key={index}
                >
                  <Link to={url}>{el[0].name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/:id"
          render={(props) => <PokemonDetails {...props} data={pokemons} />}
        />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
};

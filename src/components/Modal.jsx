import React from "react";
import "./Modal.css";

export const Modal = ({ pokemons, modalStatus }) => {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <div className="modal-body-close" onClick={modalStatus}>
          X
        </div>
        <ul className="modal-body-list">
          {pokemons.map((el, index) => {
            return (
              <li className="modal-body-list-item" key={index}>
                <a>{el.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

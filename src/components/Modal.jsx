import React from "react";
import "./Modal.css";

export const Modal = ({ pokemonInfo, modalStatus }) => {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <div className="modal-body-close" onClick={modalStatus}>
          X
        </div>
        <ul className="modal-body-list">
          {pokemonInfo.map((el, index) => {
            return (
              <li className="modal-body-list-item" key={index}>
                <a>{el[0].name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

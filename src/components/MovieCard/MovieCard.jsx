import "./movieCard.css";

import React from "react";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

function MovieCard (props) {

  return (
    <div className="card">
     <h2>Movie Card</h2>
    </div>
  );
};

export default MovieCard;

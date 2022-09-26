import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions/index';

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

function MovieDetail (props) {

  const date = useSelector((state) => state.movieDetail);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getMovieDetail(props.match.params.id))
  })

  return (
    <div>
      <h2>Movie Detail</h2>
      <h3>{date.name}</h3>
      <h3>{date.director}</h3>
      <h3>{date.description}</h3>
      <h3>{date.releaseYear}</h3>
    </div>
  );
};

export default MovieDetail;

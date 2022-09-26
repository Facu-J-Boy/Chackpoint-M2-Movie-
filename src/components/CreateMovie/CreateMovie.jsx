import React from "react";
import { useDispatch } from "react-redux";
import * as actions from './../../redux/actions/index';
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

function CreateMovie() {

  const dispatch = useDispatch();

  const [movie, setMovie] = React.useState ({
    name:'',
    releaseYear:0,
    description:'',
    director:'',
  })

  const handleInputChange = function (ev) {
    setMovie({
      ...movie, 
      [ev.target.name] : ev.target.value 
    });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(actions.createMovie(movie));
  }


  return (
    <form onSubmit = {(e) => {handleSubmit(e)}} >
     <div>
        <label>Name: </label>
          <input type ='text' name ='name' value = {movie.name} onChange = {handleInputChange}/>
      </div>
      <div>
        <label>ReleaseYear: </label>
          <input type = 'number' name = 'releaseYear' value = {movie.releaseYear} onChange = {handleInputChange}/>
     </div>
     <div>
      <label>Description: </label>
      <textarea type = 'text' name = 'description' value = {movie.description} onChange = {handleInputChange} />
     </div>
     <div>
      <label>Director: </label>
      <input type = 'text' name = 'director' value = {movie.director} onChange = {handleInputChange} />
     </div>
     <div>
      <button type = 'submit' >Create Movie</button>
     </div>
    </form>
  );
};

export default CreateMovie;

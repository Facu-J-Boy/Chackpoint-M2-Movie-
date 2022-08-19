import React from "react";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

function CreateMovie() {
  const [movie, setMovie] = React.useState ({
    name:'',
    releaseYear:'',
    description:'',
    director:'',
  })

  const handleInputChange = function (ev) {
    setMovie({...movie, [ev.target.name] : ev.target.value });
  }


  return (
    <form>
     <div>
        <label>name:</label>
          <input 
          type ='text' 
          name ='name'
          value = {movie.name}
          onChange = {handleInputChange}/>
      </div>
      <div>
        <label>ReleaseYear:</label>
          <input 
          type = 'number' 
          name = 'releaseYear'
          value = {movie.releaseYear}
          onChange = {handleInputChange}/>
     </div>
     <div>
      <label>Descriptio:</label>
      <textarea name = 'description'/>
     </div>
     <div>
      <label>Director:</label>
      <input 
      type = 'text' 
      name = 'director'/>
     </div>
     <div>
      <input 
      type = 'submit' 
      value = 'Create Movie'/>
     </div>
    </form>
  );
};

export default CreateMovie;

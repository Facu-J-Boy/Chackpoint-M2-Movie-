import React from "react";
import {Route} from 'react-router-dom';
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import CreateMovie from "./components/CreateMovie/CreateMovie.jsx";

function App() {
  return (
    <div>
       <Nav/>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/movie/:id" component = {MovieDetail}/>
        <Route exact path = "/movies/create" component = {CreateMovie}/>
    </div>
  );
}
export default App;

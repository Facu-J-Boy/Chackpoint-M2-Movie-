import React from "react";
import {Home} from './components/Home/Home.jsx';
import CreateMovie from "./components/CreateMovie/CreateMovie.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
       <Nav/>
       <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/movie/:id' render = {MovieDetail}/>
        <Route path = '/movies/create' render = {CreateMovie}/>
       </Switch>
       </Router>
    </div>
  );
}
export default App;

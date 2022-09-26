import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../../img-cp2/main-image-cp2.jpg';
import { getAllMovies } from "../../redux/actions";
import MovieCard from '../MovieCard/MovieCard';
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }
  render() {
    return (
      <div className="home">
        <h1>Henry Movies</h1>
        <img src = {logo} alt = 'henry-movies-logo'/>
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
        {this.props.movies?.map((e) => {
          return (
            <MovieCard
            key={e.id} 
            id={e.id}
            name={e.name}
            director={e.director}
            releaseYear={e.releaseYear}
            image={e.image} />
          )
        })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}


export const mapDispatchToProps = ({getAllMovies})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

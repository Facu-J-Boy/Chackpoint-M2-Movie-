import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../../img-cp2/main-image-cp2.jpg';
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home">
        <h1>Henry Movies</h1>
        <img src = {logo} alt = 'henry-movies-logo'/>
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
      </div>
    );
  }
}

export const mapStateToProps = undefined

export const mapDispatchToProps = undefined

export default connect(mapStateToProps, mapDispatchToProps)(Home);

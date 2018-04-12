import React, {Component} from 'react';
import logo from './logo.svg';
import PlaceListItem from './components/Places';
import Map from './components/Map';
import Cards from './components/Cards';
// import NavBar from './components/NavBar';

import './App.css';
// import request from 'superagent';
class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    places: []
  }
  componentDidMount() {

  };
  render() {
    
    return ( <div className = "App" >
      <header className = "App-header" >
      {/* <NavBar /> */}
      <Map />
      <h1 className = "App-title" > {
        // place._embedded["pw:location"].name
      } </h1> </header>
      
      <Cards />
      <PlaceListItem />
      
      </div>
    );
  }
}
export default App;
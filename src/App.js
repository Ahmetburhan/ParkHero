import React, {Component} from 'react';
import logo from './logo.svg';
import PlaceListItem from './components/Places';

import './App.css';
import request from 'superagent';
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
      <img src = {logo}
      className = "App-logo"
      alt = "logo" / >
      <h1 className = "App-title" > {
        // place._embedded["pw:location"].name
      } </h1> </header>
      
      
      <PlaceListItem />
      
      </div>
    );
  }
}
export default App;
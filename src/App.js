import React, {Component} from 'react';
import logo from './logo.svg';
import PlaceListItem from './components/Places';
import Map from './components/Map';
import Cards from './components/Cards';
import FooterPage from './components/Footer';
import Details from './components/Details';


// import NavBar from './components/NavBar';

import './App.css';
// import request from 'superagent';
class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    places: [],
    selected: [],
    selectedPlace:'',
  }
  handleClick = (place) => {
    console.log(place)
    this.setState({selectedPlace:place})
    // this.setState({
    //   selected: e.target
  //   // })
  //   alert('You have clicked on me');

  // console.log("clicked", e.target)

  };
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
      
      <Cards handleClick={this.handleClick}/>
  
      <PlaceListItem />
      <Details place={this.state.selectedPlace}/>
      
      
      <footer className="App-footer" >

      <FooterPage />

      </footer>
      </div>

    );
  }
}
export default App;
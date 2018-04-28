import React, {Component} from 'react';
import logo from './logo.svg';
import PlaceListItem from './components/Places';
import Map from './components/Map';
import Cards from './components/Cards';
import FooterPage from './components/Footer';
import Details from './components/Details';
import request from 'superagent';
import { Container } from 'reactstrap';
import Modaler from './components/Modal';

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
    value: '',
  }

  componentDidMount() {
   
    // console.log(this)
    // http://api.parkwhiz.com/parking/arlington/601-stadium-dr/?start=1297027800&end=1297047600&key=62d882d8cfe5680004fa849286b6ce20
    //http://api.parkwhiz.com/search/?destination=312+N+wacker+Dr,+Chicago&start=1523403449&end=1523414249&key=62d882d8cfe5680004fa849286b6ce20




    request
      .get('http://api.parkwhiz.com/v4/quotes/?start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20%27&q=coordinates:37.791365,-122.393741').then(res => {
        if (res.ok) {
          console.log(res.body)
          console.log(res.body[0])
          this.setState({
            places: res.body,
            selectedPlace: res.body[0]
          })
        } else {
          console.log('We found nothing')
        }
      })

  };
  getCoordsMap = (obj,address) => {
    console.log('you hit ', obj)
    console.log('you hit ', address)
    request
      .get(`http://api.parkwhiz.com/v4/quotes/?start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20%27&q=coordinates:${obj.lat},${obj.lng}`).then(res => {
        if (res.ok) {
          console.log(res.body)
          console.log(res.body[0])
          console.log("its coming here",this.state.address)
          this.setState({
            places: res.body,
            selectedPlace: res.body[0],
            selectedAddress: address
          })
        } else {
          console.log('We found nothing')
        }
      })
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
 
  render() {
    
    return ( <div className = "App" >
      <header className = "App-header" >
      {/* <NavBar /> */}
      <Map getCoordsMap={this.getCoordsMap} selectedAddress={this.state.selectedAddress} address={this.state.address}/>
      <h1 className = "App-title" > {
        // place._embedded["pw:location"].name
      } </h1> </header>

      <Details place={this.state.selectedPlace} places={this.state.places} />
     
      <Cards handleClick={this.handleClick} places={this.state.places} place={this.state.selectedPlace}/>
      
      
      <footer className="App-footer" >
      <FooterPage />
      <Modaler/>
      </footer>
      </div>

    );
  }
}
export default App;
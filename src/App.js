import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';



class App extends Component {
  constructor(props) {
    super(props)
  }
  state = { places: [] }

  componentDidMount() {


    // http://api.parkwhiz.com/parking/arlington/601-stadium-dr/?start=1297027800&end=1297047600&key=62d882d8cfe5680004fa849286b6ce20

    //http://api.parkwhiz.com/search/?destination=312+N+wacker+Dr,+Chicago&start=1523403449&end=1523414249&key=62d882d8cfe5680004fa849286b6ce20

    request
      .get('http://api.parkwhiz.com/v4/quotes/?q=coordinates:41.8857256,-87.6369590&start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20').then(res => {
        if (res.ok) {
          console.log(res.body)
          this.setState({
            places: res.body
          })
        }
        else {
          this.setState('Opps we found nothing!')
          console.log('We found nothing')
        }
      })
    // .catch(err => console.log(err))
  };

  // componentWillMount() {


  //   // http://api.parkwhiz.com/parking/arlington/601-stadium-dr/?start=1297027800&end=1297047600&key=62d882d8cfe5680004fa849286b6ce20

  //   //http://api.parkwhiz.com/search/?destination=312+N+wacker+Dr,+Chicago&start=1523403449&end=1523414249&key=62d882d8cfe5680004fa849286b6ce20

  //   request 
  //     .get('http://api.parkwhiz.com/v4/quotes/?q=coordinates:41.8857256,-87.6369590&start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20').then(res => {
  //       if(res.ok){
  //         console.log(res.body)
  //         this.setState({
  //           place: res.body

  //         })
  //       }
  //       else{
  //         this.setState('Opps we found nothing!')
  //         console.log('We found nothing')
  //       }
  //     })
  //     .catch(err => console.log(err))

  //   // fetch('http://api.parkwhiz.com/v4/quotes/?q=coordinates:41.8857256,-87.6369590&start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20' )
  //   // .then ( response => response.json() )
  //   // // .then ( ({results: places}) => this.setState({places}))

  // }
  render() {
    let place = this.state.places
    let imgStyle = {
      width: '155px'
    }
    // console.log(place)
    return (


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          < h1 className="App-title" > {
            // place._embedded["pw:location"].name
          } </h1>
        </header>
        <h3 className="Place-intro">
          <ul className="place-group">
            {place.map(place => (
              <p key={place._embedded["pw:location"].id}>
                {place._embedded["pw:location"].name}
              </p>
            ))}
            {place.map(place => (
              <img key={place._embedded["pw:location"].id} style= {imgStyle}
            className="user-info__avatar" src={place._embedded["pw:location"].photos["0"].sizes.hub_frontpage.URL} alt={`${place._embedded["pw:location"].id} avatar`} />
             ))}
          </ul>
        </h3>

        


          </div>
    );
  }
}

export default App;
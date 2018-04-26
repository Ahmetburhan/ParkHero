import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://api.parkwhiz.com/v4/quotes/?q=coordinates:41.8857256,-87.6369590&start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.location_id}>
              {item.location_id} {item._embedded["pw:location"].name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default App;

import React, { Component } from 'react'
import SearchBar from './SearchBar';

import Iframe from 'react-iframe';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Menlo Park' };
    }

    handleChange = (value) => {
        console.log("fired", value)
        this.setState({ value });
    }

    // handleSubmit = (value) => {
    //     alert('A search query was submitted: ' + this.state.value);
    //     // this.setState({ value });
    //     // event.preventDefault();
    // }

    render() {
        // if (!this.props.loaded) return <div>Loading...</div>;
        console.log("hhhhhhhh", this.state.value)

        return (
            <div>
                <SearchBar 
                  value={this.state.value}
                  updateMap={this.handleChange}/>

                <Iframe url={`https://www.google.com/maps/embed/v1/search?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0&q=parking+garages+in+${this.state.value}`}
                    width="100%"
                    height="300px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen /> </div>
        );
    }
}


// url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0&q=parking+garages+in+" + this.state.value


// https://www.google.com/maps/embed/v1/streetview?location=37.7913,-122.3936&key=AIzaSyAjxQyFojuSIOq57lXHmAUbLjG44PYIoAE
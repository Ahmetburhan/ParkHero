import React, { Component } from 'react'
import SearchBar from './SearchBar';
import SearchAutoComplete from './SearchAutoComplete'

import Iframe from 'react-iframe';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: props.address || 'San Francisco', 
            value: "" , obj: ''
        };
    }

    handleChange = (obj) => {
        console.log("fired", obj)
        this.setState({ obj });
    }

    // handleSubmit = (address) => {
    //     alert('A search query was submitted: ' + this.state.address);
    //     // this.setState({ address });
    //     // event.preventDefault();
    // }
    getCoordsMap = (obj) => {
        console.log('you hittttttttt ', obj)
    }

    render() {
        // if (!this.props.loaded) return <div>Loading...</div>;
        console.log("hhhhhhhh", this.value)
        console.log('aaaaaaaaaaa', this.props.selectedAddress)
        let obj;
        return (
            <div>
                
                <SearchAutoComplete getCoords={this.props.getCoordsMap} />
                <Iframe getCoords={this.props.getCoordsMap} url={`https://www.google.com/maps/embed/v1/search?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0&q=parking+garages+in+${this.props.selectedAddress}`}
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


// url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0&q=parking+garages+in+" + this.state.address


// https://www.google.com/maps/embed/v1/streetview?location=37.7913,-122.3936&key=AIzaSyAjxQyFojuSIOq57lXHmAUbLjG44PYIoAE
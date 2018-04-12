import React, { Component } from 'react'

import Iframe from 'react-iframe';

export default class Map extends React.Component {
    render() {
        // if (!this.props.loaded) return <div>Loading...</div>;

        return (
            <Iframe url="https://www.google.com/maps/embed/v1/search?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0&q=parking+garages+in+Downtown+San+Francisco"
                width="100%"
                height="300px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen />
        );
    }
}




// https://www.google.com/maps/embed/v1/streetview?location=37.7913,-122.3936&key=AIzaSyAjxQyFojuSIOq57lXHmAUbLjG44PYIoAE
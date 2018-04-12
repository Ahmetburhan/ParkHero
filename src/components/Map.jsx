import React, { Component } from 'react'

import Iframe from 'react-iframe';

export default class Map extends React.Component {
    render() {
        // if (!this.props.loaded) return <div>Loading...</div>;

        return (
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
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


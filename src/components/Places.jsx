import React from 'react';
// import App from '../App';
import request from 'superagent';


export default class PlaceListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        places: []
    }
    componentDidMount() {
        // http://api.parkwhiz.com/parking/arlington/601-stadium-dr/?start=1297027800&end=1297047600&key=62d882d8cfe5680004fa849286b6ce20
        //http://api.parkwhiz.com/search/?destination=312+N+wacker+Dr,+Chicago&start=1523403449&end=1523414249&key=62d882d8cfe5680004fa849286b6ce20
        request
            .get('http://api.parkwhiz.com/v4/quotes/?q=coordinates:41.8857256,-87.6369590&start_time=2018-04-23T12:00&end_time=2018-04-23T20:00&api_key=62d882d8cfe5680004fa849286b6ce20').then(res => {
                if (res.ok) {
                    // console.log(res.body)
                    this.setState({
                        places: res.body
                    })
                } else {
                    this.setState('Opps we found nothing!')
                    // console.log('We found nothing')
                }
            })
        // .catch(err => console.log(err))
    };
    render() {

        let places = this.state.places
        let imgStyle = {
            width: '155px',
            verticalAlign: 'left',
            borderRadius: '10%',
            backfaceVisibility: "hidden",
            // display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flex: '0 0 auto',
            margin: '0 10px'
        }
        
        return (<div className="Places" >
            <h3 className="Place-intro" >
                <ul className="place-group" > {
                    places.map(place => (
                        <div>
                            <ol key={
                                place._embedded["pw:location"].id
                            } > {
                                    place._embedded["pw:location"].name
                                } </ol>
                            <img style={
                                imgStyle
                            }
                                className="user-info__avatar"
                                src={place._embedded["pw:location"].photos["0"].sizes.hub_frontpage.URL
                                }
                                alt={
                                    `${place._embedded["pw:location"].id} avatar`
                                }
                            />
                        </div>
                    ))
                } </ul> </h3> </div>
        );
    }
}
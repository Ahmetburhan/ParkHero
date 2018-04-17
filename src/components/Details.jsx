import React from 'react';
// import App from '../App';
import request from 'superagent';
import {
    Panel, PanelText
} from 'react-bootstrap';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

// import Cards from 'Cards';

export default class Details extends React.Component {
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
                    console.log('We found nothing')
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
            justifyContent: 'center'
        }
        // console.log(place)
        //let detail = (
                    // <div> <Col sm={6} md={8} lg={9} mt={8}>

                    //     <Panel bsStyle="info" key={
                    //         place._embedded["pw:location"].id
                    //     }>
                    //         <Panel.Heading>
                    //             <Panel.Title componentClass="h3">{place._embedded["pw:location"].name}</Panel.Title>
                    //         </Panel.Heading>
                    //         <Panel.Body>
                    //             <Panel.Title componentClass="h6"> {place._embedded["pw:location"].address1}</Panel.Title>
                    //             <div>
                    //                 <h6>{place._embedded["pw:location"]._links["pw:reviews"].href}</h6>
                    //             </div>
                    //         </Panel.Body>
                    //     </Panel>

                    // </Col>
                    // </div>
       // )
        let detail;
        let address1;
        let name;
        let reviews;
        if(this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
            name = this.props.place._embedded["pw:location"].name,
            reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href
        }
        return (<div className="Places" >
            <h3 className="Place-intro" >
                <div className="place-group" > 
                    <Col sm={6} md={8} lg={9} mt={8}>
                      <Panel bsStyle="info">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Panel.Title componentClass="h6"> {address1}</Panel.Title>
                                <div>
                                    <h6>{reviews}</h6>
                                </div>
                            </Panel.Body>
                        </Panel>

                    </Col>
                     </div> </h3> </div>
        );
    }
}


{/* <div>
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
</div> */}
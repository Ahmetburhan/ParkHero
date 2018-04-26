import React from 'react';
import ReactDOM from 'react-dom';
// import ReactStreetview from 'react-streetview';
import request from 'superagent';
import Map from './ThreeDMap';
import './Reviews.css';


// import App from '../App';
import {
    Carousel, Panel, PanelText
} from 'react-bootstrap';
import {
    UncontrolledCarousel, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import StreetView from 'react-google-map-street-view';
// import Cards from 'Cards';

export default class Reiews extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        places: [],
        selected: [],
        selectedPlace: '',
        reviews: [],
        commentIndex: 0
    }

    handleClick = (place) => {
        console.log(place)
        this.setState({ selectedPlace: place })
        // this.setState({
        //   selected: e.target
        //   // })
        //   alert('You have clicked on me');

        // console.log("clicked", e.target)

    };
    componentDidMount() {
        // console.log(this)
        // http://api.parkwhiz.com/parking/arlington/601-stadium-dr/?start=1297027800&end=1297047600&key=62d882d8cfe5680004fa849286b6ce20
        //http://api.parkwhiz.com/search/?destination=312+N+wacker+Dr,+Chicago&start=1523403449&end=1523414249&key=62d882d8cfe5680004fa849286b6ce20
        request
            // .get('http://api.parkwhiz.com/v4/locations/9172/reviews').then(res => {
            .get('http://api.parkwhiz.com/v4/locations/9172/reviews').then(res => {
                if (res.ok) {
                    // console.log("sssssssss", this.state._links["pw:location"].href)
                    console.log("jgggjjg", res.body)
                    console.log(res.body[0])
                    this.setState({
                        places: res.body,
                        selectedPlace: res.body[0],
                        reviews: res.body,
                    })
                    console.log("jgggjjg", res.body)
                } else {
                    console.log('We found nothing')
                }
            })
        // .catch(err => console.log(err))
    };


    //this.props.place._embedded["pw:location"].photos[0].sizes.gallery.URL
    render() {

        let places = this.state.places;
        let reviews = this.state.reviews;
        let reviewComments = reviews.filter(review => review.comment);
        console.log("asdasda", reviewComments)
        let comments = reviewComments.map(review => review.comment)
        console.log("comments................", comments[0])
        // const rotateComment = () => {
        //     let comment = comments[this.state.commentIndex]
        //     setInterval(() => this.setState({ commentIndex: this.state.commentIndex++ }), 3000)
        // };

        let detail;
        let address1;
        let name;
        // let reviews;
        let photo1;
        let photo2;
        let photo3;
        let photo4;
        let photo5;
        let photo6;
        let location;
        if (this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
                name = this.props.place._embedded["pw:location"].name,
                reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href,
                photo1 = this.props.place._embedded["pw:location"].photos[0].sizes.gallery.URL,
                photo2 = this.props.place._embedded["pw:location"].photos[1].sizes.gallery.URL,
                photo3 = this.props.place._embedded["pw:location"].photos[2].sizes.gallery.URL,
                // photo4 = this.props.place._embedded["pw:location"].photos[4].sizes.gallery.URL,
                // photo5 = this.props.place._embedded["pw:location"].photos[5].sizes.gallery.URL,
                // photo6 = this.props.place._embedded["pw:location"].photos[6].sizes.gallery.URL,
                location = this.props.place._embedded["pw:location"].entrances.coordinates
        }
        if (this.state.reviews) {
            reviews = reviews
        }
        console.log("jjllooooooojj", photo3)

        // // see https://developers.google.com/maps/documentation/javascript
        // const googleMapsApiKey = 'AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0';

        // // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
        // const streetViewPanoramaOptions = {
        //     position: { lat:41.885154902900155, len:-87.63554960489276 },
        //     pov: { heading: 100, pitch: 0 },
        //     zoom: 1
        // };


        return (<div className="Places" >
            <h3 className="Place-intro" >
                <div className="place-group" >
                    <Col style={{
                        fontFamily: 'Satisfy',
                        fontSize: "2em"
                    }}
                    reviews={this.state.reviews}>

                        {/* <h6>{this.state.reviews.map(item => (
                            <ol>{item.comment}</ol>
                        ))}</h6> */}
                        {/* reviews array */}

                        {/* <Map /> */}

                        <Carousel>
                            <Carousel.Item>
                                {/* {this.state.reviews.map(item => (
                                    <ol>{item.comment}</ol>
                                ))} */}
                                <p>{comments[0]}</p>
                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>{comments[1]}</p>
                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>{comments[2]}</p>

                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* {this.state.reviews.map(item => (
                                    <ol>{item.comment}</ol>
                                ))} */}
                                <p>{comments[3]}</p>
                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>{comments[4]}</p>
                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p>{comments[5]}</p>

                                <Carousel.Caption>
                                    {/* <h3>{name}</h3> */}
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div>



                        </div>
                        {/* <div >

                            <iframe width={"100%"} src="https://www.google.com/maps/embed/v1/streetview?location=22222,22222&key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0" allowfullscreen></iframe>
                        </div> */}
                    </Col>

                </div> </h3> </div>
        );
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
// import ReactStreetview from 'react-streetview';

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

export default class DetailsGallery extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        places: this.props.places,
        
    }


    //this.props.place._embedded["pw:location"].photos[0].sizes.gallery.URL
    render() {

        let places = this.state.places
        console.log("jjjjj",places)
        
        let detail;
        let address1;
        let name;
        let reviews;
        let photo1;
        let photo2;
        let photo3;
        let location;
        let lat;
        let long;
        let price;
        if (this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
                name = this.props.place._embedded["pw:location"].name,
                reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href,
                price = this.props.place.purchase_options[0].price.USD,
                photo1 = this.props.place._embedded["pw:location"].photos[0].sizes.gallery.URL,
                photo2 = this.props.place._embedded["pw:location"].photos[1].sizes.gallery.URL,
                photo3 = this.props.place._embedded["pw:location"].photos[2].sizes.gallery.URL,
                lat = this.props.place._embedded["pw:location"].entrances[0].coordinates[0],
                long = this.props.place._embedded["pw:location"].entrances[0].coordinates[1]
        }
        console.log("jjllooooooojj",lat,long)

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
                    <Col places={this.state.places}>

                        <Carousel>
                            <Carousel.Item>
                                <img width={1000} height={200} alt={name} src={photo1} />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={1000} height={200} alt={name} src={photo2}  />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={1000} height={200} alt={name} src={photo3}  />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
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

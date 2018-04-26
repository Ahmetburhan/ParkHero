import React from 'react';
import ReactDOM from 'react-dom';
// import ReactStreetview from 'react-streetview';
import instImg1 from '../../src/assets/images/validation-icons-1.png';
import instImg2 from '../../src/assets/images/validation-icons-2.png';
import instImg3 from '../../src/assets/images/validation-icons-3.png';


// import App from '../App';
import {
    Carousel, Panel, PanelText
} from 'react-bootstrap';
import {
    UncontrolledCarousel, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row
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
        console.log("jjaaaaaaaaaaajjj", instImg1)
        
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
        let inst1;
        let inst2;
        let inst3;
        // let instImg1;
        // let instImg2;
        // let instImg3;
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
                // inst1= this.props.place.purchase_options[0].validation.validation_steps[0].instructions,
                // inst2 = this.props.place.purchase_options[0].validation.validation_steps[1].instructions,
                // inst3 = this.props.place.purchase_options[0].validation.validation_steps[2].instructions
                // instImg1 = this.props.place.purchase_options[0].validation.validation_steps[0].icon.path,
                // instImg2 = this.props.place.purchase_options[0].validation.validation_steps[1].icon.path,
                // instImg3 = this.props.place.purchase_options[0].validation.validation_steps[3].icon.path
                
        }
        console.log("jjllooooooojj",lat,long)
        console.log("instructions", inst1, inst2, inst3)
        // console.log("instructions", instImg1, instImg2, instImg3)



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
                                    {<h3>{name}</h3>}
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <Container>
                            <h2 style={{ fontSize: "1.5em", fontFamily: 'Alfa Slab One', color: "#212529" }}> How to Park @ <h3>{name} near {address1}</h3></h2>
                            <Row>

                                <Col xs="6" sm="4">
                                    <img style={{
                                        background: "80%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: 28,
                                        // backgroundImage: `url(${instImg1})`,
                                        backgroundColor: "#f4f4f1",
                                        borderRadius: 1000,
                                        height: 88,
                                        marginBottom: 20,
                                        width: 88
                                    }} width={88} height={100} alt={name} src={instImg1} />
                                    <h4> Pull ticket at the gate to enter</h4>
                                   </Col>
                                <Col xs="6" sm="4">
                                    <img style={{
                                        background: "80%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: 28,
                                        // backgroundImage: `url(${instImg2})`,
                                        backgroundColor: "#f4f4f1",
                                        borderRadius: 1000,
                                        height: 88,
                                        marginBottom: 20,
                                        width: 88
                                    }} width={88} height={100} alt={name} src={instImg2} />
                                    <h4>Present pulled ticket and ParkHero Pass to valet attendant in exchange for valet-ticket</h4></Col>
                                <Col xs="6" sm="4">
                                    <img style={{
                                        background: "80%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: 28,
                                        // backgroundImage: `url(${instImg3})`,
                                        backgroundColor: "#f4f4f1",
                                        borderRadius: 1000,
                                        height: 88,
                                        marginBottom: 20,
                                        width: 88
                                    }} width={88} height={100} alt={name} src={instImg3} />
                                    <h4>When you return, present valet-ticket to attendant (tip not included in reservation)</h4></Col>

                            </Row>
                            </Container>
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

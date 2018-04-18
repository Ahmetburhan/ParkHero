import React from 'react';

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
        if (this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
                name = this.props.place._embedded["pw:location"].name,
                reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href,
                photo1 = this.props.place._embedded["pw:location"].photos[0].sizes.gallery.URL,
                photo2 = this.props.place._embedded["pw:location"].photos[1].sizes.gallery.URL,
                photo3 = this.props.place._embedded["pw:location"].photos[2].sizes.gallery.URL
        }
        console.log(address1)
        return (<div className="Places" >
            <h3 className="Place-intro" >
                <div className="place-group" >
                    <Col places={this.state.places}>

                        <Carousel>
                            <Carousel.Item>
                                <img width={800} height={200} alt={name} src={photo1} />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={800} height={200} alt={name} src={photo2}  />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={800} height={200} alt={name} src={photo3}  />
                                <Carousel.Caption>
                                    <h3>{name}</h3>
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                       
                    </Col>
                    <Panel>

                        <iframe src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCcmHoNv1RH34LAlFdaJnic_8xVset4KX0
  &location=41.885154902900155,-87.63554960489276
  &heading=210
  &pitch=10
  &fov=35" allowfullscreen>
  </iframe>
                        </Panel>
                </div> </h3> </div>
        );
    }
}

import React from 'react';
import DetailsGallery from './DetailsGallery';
import Reviews from './Reviews';
import SmsForm from './SmsForm';


import JwModal from 'jw-react-modal';


// import App from '../App';
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
        places: this.props.places,
    }

    render() {

        let places = this.state.places
        console.log(places)
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

       


        // //working iframe
        // const IframeEmbed = ({ id }) => (

        //     <div className="iframe-wrapper">
        //         <div className="iframer">
        //             <iframe
        //                 className="youtube-frame"
        //                 src={`http://www.youtube.com/embed/xDMP3i36naA`}
        //                 width='800'
        //                 height='1067'
        //                 allowFullScreen
        //             />
        //         </div>
        //     </div>

        // );

        // let iframeProps = {
        //     src: `https://www.parkwhiz.com/find_and_book/?start_time=2017-12-23T12:00&end_time=2017-12-23T20:00&pwa=ee51&location_id=${8905}`,
        //     width: 800,
        //     height: 1067

        // }
        let detail;
        let address1;
        let name;
        let reviews;
        let price;
        let quotes;
        let lat;
        let long;
        let instImg1;
        let instImg2;
        let instImg3;

        let iframeProps = {
            src: `https://www.parkwhiz.com/find_and_book/?start_time=2017-12-23T12:00&end_time=2017-12-23T20:00&pwa=ee51&location_id=8905`,
            width: 800,
            height: 1067

        }
        if (this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
                name = this.props.place._embedded["pw:location"].name,
                price = this.props.place.purchase_options[0].price.USD,
                reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href,
                quotes = this.props.place._embedded["pw:location"]._links["pw:quotes"].href
                lat = this.props.place._embedded["pw:location"].entrances[0].coordinates[0],
                    long = this.props.place._embedded["pw:location"].entrances[0].coordinates[1]
            
        }
        console.log("testttttt",{lat})
        console.log("rrrrrrrrrrr", {long})
        console.log(places)
        console.log("address1",address1)
        console.log("quotesssss", quotes)

        const IframeEmbed = ({ id }) => (

            <div className="iframe-wrapper">
                <div className="iframer">
                    <iframe
                        className="youtube-frame"
                        src={`https://www.parkwhiz.com/find_and_book/?start_time=2017-12-23T12:00&end_time=2017-12-23T20:00&pwa=ee51&location_id=8905`}
                        width='800'
                        height='1067'
                        allowFullScreen
                    />
                </div>
            </div>

        );
        const MapEmbed = ({ id }) => (

            <div className="iframe-wrapper">
                <div className="iframer">
                    <iframe
                        className="youtube-frame"
                        src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAYMzbG37X6USShijS7wjYjxRA58AJiJIM&location=${lat},${long}&heading=165&pitch=0&fov=75`}
                        width='100%'
                        height='300'
                        allowFullScreen
                    />
                </div>
            </div>

        );

        const location = `https://www.parkwhiz.com/find_and_book/?start_time=2017-12-23T12:00&end_time=2017-12-23T20:00&pwa=ee51&location_id=8905`

        return (<div className="Places" >
            <h3 className="Place-intro" >
                <div className="place-group" >
                    <Col sm={6} md={8} lg={9} mt={8}>
                        <Panel bsStyle="info">
                            <Panel.Heading style={{ fontSize: "1.5em",fontFamily: 'Alfa Slab One',backgroundImage: "linear-gradient(to bottom,#31708f 0,#31708f 100%)", color: "azure" }}>
                                <Panel.Title componentClass="h3">{name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <DetailsGallery {...this.props} />

                                {/* <Panel.Title componentClass="h6"> {address1}</Panel.Title> */}

                                {/* <div>
                                    <h6>{reviews}</h6>
                                </div> */}
                                <h1> You can book me for ${price}</h1>
                                
                                <Button href={location} color="success" size="lg" block> <h1 style={{ fontSize: 18 }}>Book  <i style={{ verticalAlign: "-0.34em" }} className="fab fa-apple-pay fa-2x"></i> </h1> </Button>
                                <JwModal id="cardModal">
                                    <h1>Booking is one step away</h1>
                                    <IframeEmbed/>
                                    {/* <iframe
                                        className='embedly-embed'
                                        scrolling='no'
                                        frameBorder='0'
                                        allowFullScreen
                                        { ...iframeProps }
                                    /> */}
                                    <Button color="danger" onClick={JwModal.close('cardModal')}>Close</Button>
                                </JwModal>
                                <div><h1 style={{
                                    fontFamily: 'Alfa Slab One',
                                }}> People <i style={{
                                    color: "tomato", verticalAlign: "-0.34em"
                                }} className="fas fa-heart fa-2x"></i>  ParkHero</h1></div>

                                <Reviews {...this.props} />
                                <SmsForm {...this.props} />
                                
                                <MapEmbed />
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
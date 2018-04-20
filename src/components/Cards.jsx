import React from 'react';
import Modaler from './Modal';
import JwModal from 'jw-react-modal';


// import App from '../App';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
    col
} from 'react-bootstrap';


export default class Cards extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        places: this.props.places,
    }

    findDetail = id => {
        let placeDetail = this.props.places.find(place => id === place.location_id);
        this.props.handleClick(placeDetail)
    }
    render() {
        console.log(this.props)

        const customStyles = {
            body: {
                backgroundColor: 'red',
                fontSize: 100
            },
            background: {
                backgroundColor: 'green',
            }
        };
        let places = this.props.places
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
        let detail;
        let address1;
        let name;
        let reviews;
        if (this.props.place) {
            address1 = this.props.place._embedded["pw:location"].address1,
                name = this.props.place._embedded["pw:location"].name,
                reviews = this.props.place._embedded["pw:location"]._links["pw:reviews"].href
            console.log(address1)

        }
        return (
            <div className="Places" >
                <h3 className="Place-intro" >
                    <ul className="place-group" > {
                        places.map(place => (
                            <div> <Col sm="6" md="4" lg="3" mt="4">
                                <Card style={{ marginBottom: "1em" }} key={
                                    place._embedded["pw:location"].id
                                }
                                    onClick={e => {
                                        e.preventDefault()
                                        this.findDetail(place._embedded["pw:location"].id)
                                    }}>
                                    <CardImg top width="50%" src={place._embedded["pw:location"].photos["0"].sizes.hub_frontpage.URL
                                    } alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{place._embedded["pw:location"].name}</CardTitle>
                                        <CardSubtitle>Near {place._embedded["pw:location"].address1}</CardSubtitle>
                                        {/* <CardText>{place._embedded["pw:location"]._links["pw:reviews"].href}</CardText> */}
                                        <Button onClick={JwModal.open('cardModal')}color="success" size="lg" block> <h1 style={{ fontSize: 18 }}>Book  <i style={{ verticalAlign: "-0.34em" }} class="fab fa-apple-pay fa-2x"></i> </h1> </Button>
                                        
                                        <JwModal id="cardModal">
                                            <h1>Booking is one step away</h1>
                                            <p>
                                                Add iFrame in here :)
    </p>
                                            <Button color="danger" onClick={JwModal.close('cardModal')}>Close</Button>
                                        </JwModal>
                                    </CardBody>
                                </Card>
                            </Col>
                            </div>







                        ))
                    } </ul> </h3> </div>
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
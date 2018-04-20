import React from 'react';
import DetailsGallery from './DetailsGallery';
import Reviews from './Reviews';


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
                            <Panel.Heading style={{ backgroundImage: "linear-gradient(to bottom,#31708f 0,#31708f 100%)",color: "azure"}}>
                                <Panel.Title componentClass="h3">{name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <DetailsGallery {...this.props} />

                                <Panel.Title componentClass="h6"> {address1}</Panel.Title>
                               
                                {/* <div>
                                    <h6>{reviews}</h6>
                                </div> */}
                                <h4> Reviews</h4>
                                <Reviews {...this.props} />
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
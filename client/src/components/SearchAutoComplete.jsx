import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
import Img from '../../src/assets/images/magnifying-glass-icon.svg'
import Pin from '../../src/assets/images/map-pin-icon.svg'
// import GoogleLogin from './GoogleLogin'
export default class SearchAutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            address: '' ,
            loggedIn: false
        }
    }



    handleChange = (address) => {
        this.setState({ address })
        console.log("address:", address)

    }
    
    // onSignIn = (googleUser) => {
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // this.setState ({loggedIn: true})
    // }
    // onSignOut= () => {
    //     var auth2 = gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function () {
    //         console.log('User signed out.');
    //     });
    //     this.setState({ loggedIn: false })

    // }

    handleSelect = (address) => {

        // console.log('see getCoord',event.target.value)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.props.getCoords(latLng, address);
            })
            .catch(error => console.error('Error', error))
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <FormGroup row>
                            <Label style={{ fontSize: 18 }} sm={2}> Search: </Label>
                            <Col sm={5}>
                            
                                <Input sm={4} style={{ fontSize: 18, height: 45,
                                    color: "cornflowerblue",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 28,
                                    backgroundColor: "rgba(255,255,255,.84)",
                                    backgroundSize: 22,
                                    backgroundImage: `url(${Pin})`,
                                    borderRadius: "5 0 0 5",
                                    boxShadow: "0 2 4 0 rgba(0,0,0,.25)",
                                    height: 45,
                                    fontSize: 18,
                                    paddingLeft: 65
                                }}
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input'
                            }) }
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#31708f', fontSize: "18px",  cursor: 'pointer' }
                                    : { color: '#31708f',fontSize: "18px", backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style }) }>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                            <Col sm={3}>
                                <Input style={{
                                    color: "white",
                                    fontSize: "1.6em",
                                    fontStyle: "oblique",
                                    backgroundColor: "#ef4555",
                                    paddingRight: 20,
                                    height: 45,
                                    backgroundImage: `url(${Img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 25px center",
                                    backgroundSize: 18
                                }}

                                    type="submit"
                                    value="FIND PARKING Nearby"
                                    onClick={this.handleClick} />
                            </Col>
                            <Col sm={1}>
                                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                                <div>
                                {/* <a href="#" onclick="signOut();">Sign out</a> */}
                                </div>


                            {/* {
                                    this.state.loggedIn ?
                                        <div className="g-signout" data-onsuccess="this.onSignOut"></div> :
                                    <div className="g-signin2" data-onsuccess="this.onSignIn"></div>
                                    
                            } */}
                            </Col>
                        
                            </FormGroup>
                        

                    </div>

                )}
            </PlacesAutocomplete>
        );
    }
}
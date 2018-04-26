import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
import Img from '../../src/assets/images/magnifying-glass-icon.svg'
import Pin from '../../src/assets/images/map-pin-icon.svg'
import SearchAutoComplete from './SearchAutoComplete'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }; 
        console.log("props", props)
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("target value", event.target.value)
        this.setState({ value: event.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.updateMap(this.state.value);
    }

    // handleSubmit(event) {
    //     alert('A search query was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        // const img = require('../../src/assets/images/magnifying-glass-icon.svg');
        return (
            <div>

                <Form sm={2} onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label style={{ fontSize: 18 }} sm={2}> Search: </Label>
                        <Col sm={6}>
                            {/* <Input sm={10} placeholder="Search Address, Place or Event"
                                style={{
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
                            
                                onChange={this.handleChange}
                                type="text" /> */}
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
                    </FormGroup>
                </Form>
            </div>
        );
    }
}


{/* <div class="col-md-8 col-md-offset-2 padding-top-20" data-reactid="163"><div class="input-group cta-hero-input with-map-pin-icon" data-reactid="164"><div class="false" data-reactid="165"><div style="display:flex;" class="gplaces-autocomplete autocomplete-wrap" data-reactid="166"><input type="search" autocomplete="off" class="form-control focusField gplaces-input-dropdown  fout-enabled" id="" placeholder="Search Address, Place or Event" data-reactid="167"><button class="btn btn-watermelon  " type="submit" data-reactid="168"><span class="hidden-xs fout-enabled" data-reactid="169">FIND PARKING</span></button><a class="cancel-autocomplete text-color-white text-weight-book" data-reactid="170">cancel</a></div></div></div><div class="form-group visible-sm visible-xs" data-reactid="171"><div data-reactid="172"><div class="text-color-white text-size-16 margin-top-20" data-reactid="173"><span class="iconified iconified-current-location iconified-space-right" data-reactid="174"></span><span class="border-style-solid border-side-bottom border-color-white" data-reactid="175">Find Parking Nearby</span></div></div></div></div> */ }
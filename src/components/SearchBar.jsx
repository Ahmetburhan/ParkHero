import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                
                <Form sm={2} onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label style={{ fontSize: 18 }} sm={2}> Search: </Label> 
                    <Col sm={6}>
                            <Input sm={10} placeholder="Search Address, Place or Event"  style={{ color: "cornflowerblue" }} type="text" value={this.state.value} onChange={this.handleChange} />
                    </Col>

                    <Col sm={4}>
    <Input style={{
    color: "white",
    fontSize: "1.6em",
    fontStyle: "oblique",
    backgroundColor: "#ef4555",
    paddingRight: 20,
    backgroundImage: `url(https://www.parkwhiz.com/images/svg/magnifying-glass-icon.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 25px center",
    backgroundSize: 18 }} 
    type="submit" 
    value="FIND PARKING Nearby" /> 
                        </Col>
                </FormGroup>
                </Form>
            </div>
        );
    }
}

        
{/* <div class="col-md-8 col-md-offset-2 padding-top-20" data-reactid="163"><div class="input-group cta-hero-input with-map-pin-icon" data-reactid="164"><div class="false" data-reactid="165"><div style="display:flex;" class="gplaces-autocomplete autocomplete-wrap" data-reactid="166"><input type="search" autocomplete="off" class="form-control focusField gplaces-input-dropdown  fout-enabled" id="" placeholder="Search Address, Place or Event" data-reactid="167"><button class="btn btn-watermelon  " type="submit" data-reactid="168"><span class="hidden-xs fout-enabled" data-reactid="169">FIND PARKING</span></button><a class="cancel-autocomplete text-color-white text-weight-book" data-reactid="170">cancel</a></div></div></div><div class="form-group visible-sm visible-xs" data-reactid="171"><div data-reactid="172"><div class="text-color-white text-size-16 margin-top-20" data-reactid="173"><span class="iconified iconified-current-location iconified-space-right" data-reactid="174"></span><span class="border-style-solid border-side-bottom border-color-white" data-reactid="175">Find Parking Nearby</span></div></div></div></div> */}
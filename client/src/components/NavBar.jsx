import React, { Component } from 'react'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export default class NavBar extends React.Component {
    render() {

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">ParkHero</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        Signed in as: <Navbar.Link href="#">Ahmet Koylan</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullRight>Have a great day!</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}




// https://www.google.com/maps/embed/v1/streetview?location=37.7913,-122.3936&key=AIzaSyAjxQyFojuSIOq57lXHmAUbLjG44PYIoAE
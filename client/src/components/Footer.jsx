
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer backgroundcolor="blue" className="font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="6">
                            <h6 className="title">Park Hero</h6>
                            <p>Here you can use rows and columns here to organize your footer content.</p>
                        </Col>
                        <Col sm="6">
                            <h4 className="title">Links</h4>
                            <ul>
                                <li className="list-unstyled"><a href="#!">Link 1</a></li>
                                <li className="list-unstyled"><a href="#!">Link 2</a></li>
                                <li className="list-unstyled"><a href="#!">Link 3</a></li>
                                <li className="list-unstyled"><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.ParkHero.com"> ParkHero.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;

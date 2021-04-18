import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className="container-fluid header-area">
            <Container>
                <Row>
                <div className="col-lg-5 col-md-5 col-sm-12 content-box">
                    <h1 className="text-capitalize">Apps Maker BD<small>We Design | Develop | Deploy</small></h1>
                    <p>We value our clients and their projects. Our team produce faster, cleaner and smarter App you desire most!</p>
                    <Link to="/web-development" className="btn btn-theme custom-btn"><FontAwesomeIcon icon={["fas", "shopping-cart"]} /> Choose a Service NOW</Link>
                </div>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container-fluid contact-area pt-5 pb-5">

        <Container >
            <h2 className="text-center text-theme-headline">Contact Us</h2>
            <Row>
            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12 form-box mb-2">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Full Name"/>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12 form-box mb-2">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail Address"/>
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 form-box mb-2">
                    <label for="message" class="form-label">Message</label>
                    <textarea  class="form-control" cols="30" rows="5" id="exampleInputEmail1" placeholder="Detail Here"></textarea>
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 form-box mb-2 ">
                    <button className="btn btn-theme"><FontAwesomeIcon icon={["fab", "paper-plane"]} /> Send Now</button>
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default Contact;
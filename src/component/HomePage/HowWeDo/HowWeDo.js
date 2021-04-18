import React from 'react';
import { Container, Row } from 'react-bootstrap';
import sketch from '../../../images/pencil.png';
import code from '../../../images/code.png';
import test from '../../../images/flask.png';
import deploy from '../../../images/hosting.png';
import './HowWeDo.css';

const HowWeDo = () => {
    return (
        <Container className="what-we-do-area">
            <h2 className="text-center text-theme-headline">How we do?</h2>
            <Row>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="inner-box shadow-sm p-3 mb-5 bg-body rounded">
                        <img src={sketch} alt="We Sketch" />
                        <h4 className="text-uppercase text-theme ">We Sketch</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias. Accusantium, est ipsam doloribus id sequi veritatis fugiat</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="inner-box shadow-sm p-3 mb-5 bg-body rounded">
                        <img src={code} alt="We Code" />
                        <h4 className="text-uppercase text-theme">We Code</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias. Accusantium, est ipsam doloribus id sequi veritatis fugiat</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="inner-box shadow-sm p-3 mb-5 bg-body rounded">
                        <img src={test} alt="We Deploy" />
                        <h4 className="text-uppercase text-theme">We Test</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias. Accusantium, est ipsam doloribus id sequi veritatis fugiat</p>
                    </div>
                </div>


                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="inner-box shadow-sm p-3 mb-5 bg-body rounded">
                        <img src={deploy} alt="We Sketch" />
                        <h4 className="text-uppercase text-theme">We Deploy</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias. Accusantium, est ipsam doloribus id sequi veritatis fugiat</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default HowWeDo;
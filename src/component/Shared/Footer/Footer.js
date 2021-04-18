import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="container-fluid footer-area pt-5 pb-5 text-white" id="footer">
            <Container>
            <Row>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 content-box">
                    <h5>Why Choose Us</h5>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vel culpa veniam pariatur aliquid cupiditate beatae, laborum cumque repellat esse? Fugiat magnam vero omnis dolore. Ex facere perferendis alias tenetur, modi veritatis cumque commodi. Explicabo ipsa voluptatum sed eveniet unde provident porro, officia, rem ea eum delectus nemo reiciendis ab!</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 content-box">
                   <h5>About Us</h5>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vel culpa veniam pariatur aliquid cupiditate beatae, laborum cumque repellat esse? Fugiat magnam vero omnis dolore. Ex facere perferendis alias tenetur, modi veritatis cumque commodi. Explicabo ipsa voluptatum sed eveniet unde provident porro, officia, rem ea eum delectus nemo reiciendis ab!</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 content-box">
                    <h5>Hot Links</h5>
                    <ul>
                        <li><Link to="#">About Team</Link></li>
                        <li><Link to="#">Vacancy</Link></li>
                        <li><Link to="#">Terms &amp; Conditions</Link></li>
                        <li><Link to="#">Refund Policy</Link></li>
                        <li className="social mt-5">
                            <a href="#" className="text-primary"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                            <a href="#" className="text-info"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                            <a href="#" className="text-danger"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
                        </li>
                    </ul>
                </div>
            </Row>
            </Container>
        </footer>
    );
};

export default Footer;
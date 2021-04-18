import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ClientReview.css';

const ClientReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/clientReview`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    console.log(reviews);

    return (
        <div className="container-fluid client-review-area">
            <Container className="">
                <h2 className="text-center text-theme-headline">Client Review</h2>
                <Row>
                    {
                        reviews.map(rv => <ReviewCard key={rv._id} reviewObject={rv}></ReviewCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ClientReview;
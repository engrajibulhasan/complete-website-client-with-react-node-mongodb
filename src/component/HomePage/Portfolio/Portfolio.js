import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.css';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/portfolio`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPortfolios(data);
            })
    }, [])



    return (
        <Container className="portfolio-area pt-5 pb-5">
                <h2 className="text-center text-theme-headline">Our Portfolio</h2>
                <Row>
                    {
                        portfolios.map(pf => <PortfolioCard key={pf._id} portfolioObject={pf}></PortfolioCard>)
                    }
                </Row>
        </Container>
    );
};

export default Portfolio;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';



const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    console.log(services);
    return (
        <Container>
            <h2 className="text-center text-theme-headline">Best Web Solution in Town</h2>
            <Row>
                {
                    services.map(pd => <ServiceCard key={pd._id} serviceObject={pd}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;
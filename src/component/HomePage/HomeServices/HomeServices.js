import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import serviceImageOffline from '../../../images/woo.jpg';



const HomeServices = () => {
    //Data for offline  Electricity Issuse
    const servicesOffline = [
        {
            _id: 1,
            name: 'Service Name',
            detail: 'lorem50Some quick example text to build on the card title and make up the bulk of the card',
            price: 25000,
            image: serviceImageOffline

        },
        {
            _id: 2,
            name: 'Service Two',
            detail: 'lorem50Some quick example text to build on the card title and make up the bulk of the card',
            price: 65000,
            image: serviceImageOffline

        },
        {
            _id: 3,
            name: 'Service Three',
            detail: 'lorem50Some quick example text to build on the card title and make up the bulk of the card',
            price: 75000,
            image: serviceImageOffline

        }
    ]

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    console.log(products);
    return (
        <Container>
            <h2 className="text-center text-theme-headline">Best Web Solution in Town</h2>
            <Row>
                {
                    products.map(pd => <ServiceCard key={pd._id} serviceObject={pd}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;
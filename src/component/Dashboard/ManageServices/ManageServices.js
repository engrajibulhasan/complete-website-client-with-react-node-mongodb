import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceRow from '../ServiceRow/ServiceRow';

const ManageServices = () => {

    const [deleted, setDeleted] = useState(false)
    const [products, setProducts] = useState([]);


    //Delete product start
    const handleDeleteItem = id => {
        console.log(id);
        const url = `https://fathomless-ravine-82400.herokuapp.com/deleteService/${id}`;
        fetch(url,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.ok === 1) {
                    setDeleted(true)
                }
            })
    }
    //Delete product ends


    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [deleted])

    return (
        <main className="container-fluid dashboard-area">
            <Row>
                <SideNav></SideNav>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 right-side order-list p-0">
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "cog"]} />Manage Web Services</h4>
                    {
                        deleted && <h6 style={{ color: 'red' }}><FontAwesomeIcon icon={["fas", "check"]} /> Successfully Deleted One Item!</h6>
                    }
                    <div className="custom-wrapper right-inner p-3" id="checkoutWrapper">
                        {
                            products.map(pd => <ServiceRow key={pd._id} dataObject={pd} handleDeleteItem={handleDeleteItem}></ServiceRow>)
                        }
                    </div>
                </div>
            </Row>
        </main>
    );
};

export default ManageServices;
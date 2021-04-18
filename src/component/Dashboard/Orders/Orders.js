import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ShowOrders from '../ShowOrders/ShowOrders';
import SideNav from '../SideNav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;

    //Getting Orders based on email
    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/showOrders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data) {
                    setOrders(data);
                }
            })
    }, [email])
    console.log(orders)
    return (
        <main className="container-fluid dashboard-area">
            <Row>
                <SideNav></SideNav>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 right-side order-list p-0">
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "file"]} />Total Order</h4>
                    <div className="custom-wrapper right-inner p-3" id="checkoutWrapper">
                        <p>Total <span className="badge bg-success">{orders.length}</span> Order/Orders, Check and review orders from here.</p>
                        <table className="table table-striped custom-checkout-table">
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.25)' }}>

                                    <th>Order Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Product</th>
                                    <th>Qnty.</th>
                                    <th>Price</th>
                                    <th>Paid BY</th>
                                    <th>Current Status</th>
                                    {loggedInUser.isAdmin&&<th>Action</th>}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <ShowOrders dataObject={order}></ShowOrders>)
                                }


                            </tbody>
                        </table>

                    </div>
                </div>
            </Row>
        </main>
    );
};

export default Orders;
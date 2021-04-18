import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SideNav from '../SideNav/SideNav';
import ShowOrders from '../ShowOrders/ShowOrders';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
    const [changeStatus,setChangeStatus]=useState(null);


    


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
    }, [email,changeStatus])


    //Handle Order Status
    const handleStatus=(orderNumber,status)=>{
        console.log('clicked',orderNumber,status)
        const updateOrderData={
            orderNumber:orderNumber,
            status:status
        }
        const url = `https://fathomless-ravine-82400.herokuapp.com/updateOrderStatus`;
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateOrderData)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                console.log(data)
                setChangeStatus(orderNumber);
            }
        })
    }



    return (
        <main className="container-fluid dashboard-area">
            <Row>
                <SideNav></SideNav>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 right-side order-list p-0">
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "list"]} /> Dashboard Overview | Total Order</h4>
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
                                    {loggedInUser.isAdmin&& <th>Action</th>}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <ShowOrders key={order._id} handleStatus={handleStatus} dataObject={order}></ShowOrders>)
                                }


                            </tbody>
                        </table>

                    </div>
                </div>
            </Row>
        </main>
    );
};

export default Dashboard;
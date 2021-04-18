import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Checkout.css';
import ShowCheckoutProduct from '../ShowCheckoutProduct/ShowCheckoutProduct';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import TopNavigation from '../Shared/TopNavigation/TopNavigation';
import { Row } from 'react-bootstrap';

const Checkout = () => {
    const { id } = useParams();
    const [checkoutData, setCheckoutData] = useState({});
    const [showPaymentField, setShowPaymentField] = useState(false);
    const [success, setSuccess] = useState(false);
    //Importing UserContext variable  from App.js  into useContext() hook here
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(checkoutData);
    //Getting Data based on ID
    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/showServiceById/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setCheckoutData(data);
                }

            })
    }, [id])




    const handleCheckout = (paymentId) => {
        const orderNumber = Math.floor(100000000 + Math.random() * 900000000);
        const orderInfo = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            paymentId: paymentId,
            productId: id,
            productName: checkoutData.name,
            orderNumber: orderNumber,
            totalPrice: checkoutData.price,
            discount: 0,
            quantity: 1,
            status:3,
            deliveryCharge: 0,
            orderDate: new Date()
        }

        //Sending Data to API
        const url = `https://fathomless-ravine-82400.herokuapp.com/addOrder`;
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const wrapper = document.getElementById('checkoutWrapper');
                    wrapper.style.display = "none";
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
            })
    }






    return (
        <>
            <TopNavigation></TopNavigation>
            <div className="container checkout-area">
                {
                    !success && <h2 className="text-theme"><FontAwesomeIcon icon={["fas", "shopping-cart"]} /> Checkout</h2>
                }
                {
                    success && <div className="text-center"><h2 className="text-primary "><FontAwesomeIcon icon={["fas", "check"]} /> Checkout Successful</h2><Link className="btn btn-theme " to="/dashboard/orderList"><FontAwesomeIcon icon={["fas", "list"]} /> Check Orders</Link></div>
                }

                <Row id="checkoutWrapper">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 checkout-left">
                        <ShowCheckoutProduct dataObject={checkoutData}></ShowCheckoutProduct>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 checkout-right bg-white p-2 pt-3 pb-3 rounded">
                        <h2 className="text-theme pb-3"><FontAwesomeIcon icon={["fas", "credit-card"]} /> Payment Information</h2>
                        <div className="bg-light p-2 rounded mb-4 cart-total">
                            <h3 >Total Item: 1 </h3>
                            <h3>Total Amount: ${checkoutData.price} </h3>
                        </div>
                        <ProcessPayment handlePayment={handleCheckout}></ProcessPayment>
                    </div>

                </Row>







            </div>

        </>
    );
};

export default Checkout;
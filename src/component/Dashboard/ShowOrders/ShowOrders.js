import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Row } from 'react-bootstrap';

const ShowOrders = (props) => {
    const [productInfo,setProductInfo]=useState({});
    const {name,email,productName,quantity,totalPrice,discount,deliveryCharge,orderDate}=props.dataObject;
    const total=(parseInt(totalPrice)+parseInt(deliveryCharge))-parseInt(discount);

    //Formating Date
    const dateFormating=(theDate)=>{
        return (new Date(theDate)).toDateString('dd/MM/YY');
    }


    return (
        
            <tr>
                
                <td>{dateFormating(orderDate)}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{quantity}</td>
                <td>${total}</td>
                <td>Credit Card</td>
                <td><span class="badge bg-primary">Delivered</span></td>
                <td>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Delivered</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
                    </DropdownButton>
                </td>
            </tr>
        
    );
};

export default ShowOrders;
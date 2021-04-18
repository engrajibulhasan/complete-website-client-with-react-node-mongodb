import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';

const ShowOrders = (props) => {
    const [productInfo,setProductInfo]=useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {_id,name,email,productName,quantity,totalPrice,discount,deliveryCharge,orderDate,orderNumber,status}=props.dataObject;
    const total=(parseInt(totalPrice)+parseInt(deliveryCharge))-parseInt(discount);

    //Formating Date
    const dateFormating=(theDate)=>{
        return (new Date(theDate)).toDateString('dd/MM/YY');
    }

    // let statusView=`<span className="badge bg-warning">Pending</span>`;
    // if(status===1){
    //     statusView='<span className="badge bg-primary">Done</span>';
    // }
    // else if(status===2){
    //     statusView='<span className="badge bg-secondary">Ongoing</span>';
    // }


    return (
        
            <tr>
                
                <td>{dateFormating(orderDate)}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{quantity}</td>
                <td>${total}</td>
                <td>Credit Card</td>
                <td>{status===3?<span className="badge bg-warning">Pending</span> :status===2? <span className="badge bg-secondary">Ongoing</span>:<span className="badge bg-primary">Done</span>}</td>
                {loggedInUser.isAdmin&&<td>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#" onClick={()=>props.handleStatus(orderNumber,1)}>Done</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>props.handleStatus(orderNumber,2)}>Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>props.handleStatus(orderNumber,3)}>Pending</Dropdown.Item>
                    </DropdownButton>
                </td>
                }
            </tr>
        
    );
};

export default ShowOrders;
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const {_id,name,detail,price,image}=props.serviceObject;
    const customDetail=detail.substr(0, 90);
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card mb-4">
            <div className="card" style={{ width: '100%' }}>
                <div className="img-box">
                <img src={image} className="card-img-top" alt={name} />
                </div>
                
                <div className="card-body">
                    <h4 className="text-theme">{name}</h4>
                    <p className="card-text text-secondary">{customDetail}...</p>
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <span>${price}</span>
                    <Link className="btn btn-theme" to={"/checkout/"+_id}>Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
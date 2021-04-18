import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceRow = (props) => {
    const { _id, image, name, detail, price } = props.dataObject;
    return (
        <div className="checkout-product-info shadow p-3 mb-5 bg-body rounded">
            <div className="inner-box d-flex align-items-center row">
                <div className="img-box col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <img className="img-fluid" src={image} alt={name} />
                </div>
                <div className="detail col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h4 className="text-theme">{name} <small className="text-secondary">| ${price}</small> </h4>
                    <p className="text-secondary">{detail}</p>
                </div>
                <div className="close text-danger col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <FontAwesomeIcon icon={["fas", "trash-alt"]} onClick={() => props.handleDeleteItem(_id)} />
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;
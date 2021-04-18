import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = (props) => {
    const {_id,name,detail,link,image}=props.portfolioObject;
    const customDetail=detail.substr(0, 90);
    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 service-card mb-4">
            <div className="card" style={{ width: '100%' }}>
                <div className="img-box" style={{height:'200px'}}>
                    <img src={image} className="card-img-top" alt={name}  style={{height:'100%',width:'auto'}}/>
                </div>
                
                <div className="card-body pt-0 pb-2">
                    <h4 className="text-theme pt-2" style={{fontSize:'20px'}}>{name}</h4>
                    <p className="card-text text-secondary">{customDetail}...</p>
                </div>

                <div className="card-footer d-flex justify-content-start">
                    <a className="btn btn-theme" href={link} >Visit Link</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
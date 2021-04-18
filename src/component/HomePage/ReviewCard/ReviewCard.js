import React from 'react';

const ReviewCard = (props) => {
    const { name, detail, companyName, image } = props.reviewObject;
    const customDetail = detail.substr(0, 90);

    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 review-card mb-4">
            <div className="inner-box text-center">
                <div className="img-box">
                    <img src={image} className="card-img-top" alt={name} />
                </div>
                <h4>{name}</h4>
                <h6 className="text-theme"><em>{companyName}</em></h6>
                <p className="text-dark">{customDetail}...</p>
            </div>
        </div>
    );
};

export default ReviewCard;
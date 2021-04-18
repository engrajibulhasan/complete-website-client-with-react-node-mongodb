import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';

const MakeAdmin = () => {
    const [added, setAdded] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm()
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productDetail = {
            email: data.email
        }
        const url = `https://fathomless-ravine-82400.herokuapp.com/addAdmin`;
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAdded(true);
                }
            })
    }


    return (

        <main className="container-fluid dashboard-area">
            <Row>
                <SideNav></SideNav>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 right-side order-list p-0">
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "user"]} />  Make an Admin </h4>
                    <div className="right-inner w-50 p-3">
                        {
                            added && <h6 style={{ color: 'green' }}><FontAwesomeIcon icon={["fas", "check"]} /> Admin Added Successfully!</h6>
                        }
                        <form onSubmit={handleSubmit(onSubmit)} className="row">
                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="email">Admin Email </label>
                                <input type="email" className="form-control" placeholder="Valid email ID" name="email" id="email" ref={register} onClick={() => setAdded(false)} />
                            </div>

                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <button className="btn btn-primary brn-sm" type="submit">Add New Admin</button>
                            </div>
                        </form>
                    </div>

                </div>
            </Row>
        </main>

    );
};

export default MakeAdmin;
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { Row } from 'react-bootstrap';
import SideNav from '../../SideNav/SideNav';
import { UserContext } from '../../../../App';

const AddReview = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [added, setAdded] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm()
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productDetail = {
            name: data.name,
            detail: data.detail,
            companyName: data.companyName,
            rating: data.link,
            image: loggedInUser.photo
        }

        console.log(productDetail);
        const url = `https://fathomless-ravine-82400.herokuapp.com/addReview`;
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
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "star"]} />  Add a Review</h4>
                    <div className="right-inner w-50 p-3">
                        {
                            added && <h6 style={{ color: 'green' }}><FontAwesomeIcon icon={["fas", "check"]} /> Review added successfully!</h6>
                        }

                        <form onSubmit={handleSubmit(onSubmit)} className="row">
                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" placeholder="Full Name" value={loggedInUser.name} name="name" id="name" ref={register} onClick={() => setAdded(false)} />
                            </div>

                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" className="form-control" placeholder="Company Name" name="companyName" id="companyName" ref={register({ required: true })} />
                            </div>

                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="rating">Rate Us</label>
                                <select name="rating" id="rating"  className="form-control"  {...register("rating")}>
                                    <option value="1">One Star</option>
                                    <option value="2">Two Star</option>
                                    <option value="3">Three Star</option>
                                    <option value="4">Four Star</option>
                                    <option value="5">Five Star</option>
                                </select>
                            </div>

                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label htmlFor="detail">Short Description</label>
                                <textarea className="form-control" name="detail" id="detail" cols="30" rows="5" placeholder="Package Detail" ref={register({ required: true })}></textarea>
                            </div>



                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <button className="btn btn-primary brn-sm" type="submit">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </Row>
        </main>

    );
};

export default AddReview;
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddWebService = () => {
    const [added, setAdded] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm()
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productDetail = {
            name: data.title,
            detail: data.detail,
            price: data.price,
            image: imageUrl
        }

        console.log(productDetail);
        const url = `https://fathomless-ravine-82400.herokuapp.com/addService`;
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



    const handleImageUpload = (event) => {
        //console.log(event.target.files);
        console.log(event.target.files[0]);
        const imageData = new FormData();
        //imagebb API key here
        imageData.set('key', '64be5935eb0b244b7c45902a3549373b');
        imageData.append('image', event.target.files[0]);

        //uploading into image bb
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                const resUrl = response.data.data.display_url;
                console.log(resUrl);
                setImageUrl(resUrl);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    
    return (
        <main className="container-fluid dashboard-area">
            <Row>
                <SideNav></SideNav>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 right-side order-list p-0">
                    <h4 className="text-theme text-left bg-light "><FontAwesomeIcon icon={["fas", "globe"]} />  Add Web Service</h4>
                    <div className="right-inner w-50 p-3">
                        {
                            added && <h6 style={{ color: 'green' }}><FontAwesomeIcon icon={["fas", "check"]} /> Service added successfully!</h6>
                        }
                        <form onSubmit={handleSubmit(onSubmit)} className="row">
                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="title">Package Name</label>
                                <input type="text" className="form-control" placeholder="Website Package Name" name="title" id="title" ref={register} onClick={() => setAdded(false)} />
                            </div>

                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="price">Price</label>
                                <input type="text" className="form-control" placeholder="Unit Price" name="price" id="price" ref={register({ required: true })} />
                            </div>

                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label htmlFor="size">Short Description</label>
                                <textarea className="form-control" name="detail" id="detail" cols="30" rows="5"  placeholder="Package Detail" ref={register({ required: true })}></textarea>
                            </div>
                            
                            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label htmlFor="image">Upload Image</label>
                                <input type="file" className="form-control" name="image" id="image" onChange={handleImageUpload} />
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

export default AddWebService;
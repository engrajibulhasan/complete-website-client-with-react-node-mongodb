import React, { useEffect, useState } from 'react';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';
import HowWeDo from '../HowWeDo/HowWeDo';
import './Home.css';


const Home = () => {
    
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`https://arcane-mountain-19251.herokuapp.com/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    
    //setTransportTypes();
    //console.log(transportTypes);
    return (
        <>
        {
            //Homepage Spinner
            products.length === 0 && <div style={{height:'100%',width:'100%',position:'absolute',top:'0',left:'0',backgroundColor:'white',transition:'500ms'}}><div style={{height:'100%'}} className="d-flex align-items-center justify-content-center"><div className="spinner-border" role="status"><span className="visually-hidden" style={{display:'none'}}>Loading...</span></div></div></div>
        }
        <TopNavigation></TopNavigation>
        <Header></Header>
        <HowWeDo></HowWeDo>
        <HomeServices></HomeServices>
        
        </>
    );
};

export default Home;
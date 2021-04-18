import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import ClientReview from '../ClientReview/ClientReview';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';
import HowWeDo from '../HowWeDo/HowWeDo';
import Portfolio from '../Portfolio/Portfolio';
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
        <ClientReview></ClientReview>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7917400937863!2d91.82056631490704!3d22.36149118529189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8856fc23ef3%3A0x6d833a294f95909e!2sApps%20Maker%20BD!5e0!3m2!1sen!2sbd!4v1618765619884!5m2!1sen!2sbd" width="100%" height="350" style={{border:'0'}} allowfullscreen="" loading="lazy" titile="apps maker bd"></iframe>
        <Footer></Footer>
        </>
    );
};

export default Home;
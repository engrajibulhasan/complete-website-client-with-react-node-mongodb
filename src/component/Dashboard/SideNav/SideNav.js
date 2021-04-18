import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideNav.css';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../../Shared/Login/LoginManager';

const SideNav = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    let photo = 'https://i.ibb.co/jJW1p1K/user.png';
    if (loggedInUser.photo) {
        photo = loggedInUser.photo;
    }

    //Sign Out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                //setUserInfo(res);
                setLoggedInUser(res);
                //history.replace(from);
            })
    }

    useEffect(() => {
        const url = `https://fathomless-ravine-82400.herokuapp.com/isAdmin`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                const newLoggedInUser={...loggedInUser}
                newLoggedInUser.isAdmin=data;
                setLoggedInUser(newLoggedInUser);
                setIsAdmin(data);
            })
    }, [])
    
    return (
        <div className="sideNavigation col-md-2 shadow p-3 mb-5">
            <h4 className="text-white text-center bg-theme mb-0 ">Apps Maker BD</h4>
            <div className="text-left p-2 d-flex flex-justify align-middle" style={{background:'rgba(0,0,0,0.05)'}}>
                <div className="avatar" style={{float:'none',marginTop:'0'}}><img src={photo} alt="user avatar" /></div>
                <p>
                Hi! {loggedInUser.name}  <br/>
                {
                    isAdmin && <strong>Your role is Admin</strong>
                }
                </p>
            </div>
            <ul>
                {isAdmin ? <>
                <li>
                    <Link className="text-secondary" to="/dashboard" >
                        <FontAwesomeIcon icon={["fas", "th-large"]} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary" to="/dashboard/orderList" >
                        <FontAwesomeIcon icon={["fas", "list"]} /> <span>Order List</span>
                    </Link>
                </li>

                <li>
                    <Link className="text-secondary" to="/dashboard/addWebService" >
                        <FontAwesomeIcon icon={["fas", "plus"]} /> <span>Add Web Service</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary" to="/dashboard/addPortfolio" >
                        <FontAwesomeIcon icon={["fas", "plus"]} /> <span>Add Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary" to="/dashboard/makeAdmin" >
                        <FontAwesomeIcon icon={["fas", "user"]} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-secondary" to="/dashboard/manageServices" >
                        <FontAwesomeIcon icon={["fas", "cog"]} /> <span>Manage Services</span>
                    </Link>
                </li>
                </>:<>
                    <li>
                        <Link className="text-secondary" to="/home" >
                            <FontAwesomeIcon icon={["fas", "shopping-cart"]} /> <span>Purchase Website</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-secondary" to="/dashboard/orderList" >
                            <FontAwesomeIcon icon={["fas", "list"]} /> <span>Order List</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="text-secondary" to="/dashboard/addReview" >
                            <FontAwesomeIcon icon={["fas", "comment"]} /> <span>Give Review</span>
                        </Link>
                    </li>
                    </>

}
                

                <li>
                    <Link className="text-secondary" to="" onClick={signOut} >
                        <FontAwesomeIcon icon={["fas", "power-off"]} /> <span>Logout</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default SideNav;
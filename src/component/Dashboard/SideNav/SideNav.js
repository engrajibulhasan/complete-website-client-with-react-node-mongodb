import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sideNavigation col-md-2 p-0">
            <h4 className="text-white text-center bg-theme ">Apps Maker BD</h4>
            <ul>
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
                {/* For Clients */}
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

                <li>
                    <Link className="text-secondary" to="/dashboard/setting"  >
                        <FontAwesomeIcon icon={["fas", "power-off"]} /> <span>Logout</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default SideNav;
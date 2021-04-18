import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../Login/LoginManager';
import './TopNavigation.css';

const TopNavigation = () => {
    initializeLoginFramework();
    //Sign Out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                //setUserInfo(res);
                setLoggedInUser(res);
                //history.replace(from);
            })
    }


    //Importing UserContext variable  from App.js  into useContext() hook here
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let photo = 'https://i.ibb.co/jJW1p1K/user.png';
    if (loggedInUser.photo) {
        photo = loggedInUser.photo;
    }

    return (
        <header>
            <Navbar fixed="top" expand="lg" className="bg-theme" >
                <Container >
                    <Navbar.Brand><Link to="/">Apps Maker BD</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="custom-link">
                            <Link to="/" className="nav-link"><FontAwesomeIcon icon={["fas", "home"]} /> Home</Link>
                            <Link to="#" className="nav-link"><FontAwesomeIcon icon={["fas", "globe"]} /> Web Development</Link>
                            <Link to="#" className="nav-link"><FontAwesomeIcon icon={["fas", "briefcase"]} /> Portfolio</Link>
                            <Link to="#" className="nav-link"><FontAwesomeIcon icon={["fas", "phone"]} /> Contact Us</Link>
                            {
                                loggedInUser.email ? <><Link to="dashboard/" style={{ fontWeight: 'bold' }} className="nav-link"><div className="avatar"><img src={photo} alt="user avatar" /></div><span className="user-name"> {loggedInUser.name ? loggedInUser.name : loggedInUser.displayName}</span></Link> <button onClick={signOut} className="btn btn-danger">Sign out </button></> : <Link to="/login" className="nav-link btn btn-light">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default TopNavigation;
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



//Font Awesome Library for individual component use
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './component/HomePage/Home/Home';
import Login from './component/Shared/Login/Login';
import PrivateRoute from './component/Shared/PrivateRoute/PrivateRoute';
import Orders from './component/Dashboard/Orders/Orders';
import Checkout from './component/Checkout/Checkout';
import NotFound from './component/Shared/NotFound/NotFound';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import AddWebService from './component/Dashboard/AddWebService/AddWebService';
import AddPortfolio from './component/Dashboard/AddPortfolio/AddPortfolio';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './component/Dashboard/Dashboard/AddReview/AddReview';
import ManageServices from './component/Dashboard/ManageServices/ManageServices';


export const UserContext=createContext();

//Passing fonts using Library
library.add(fab,fas)
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>

      <>
        
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute exact path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard/orderList">
             <Orders></Orders>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute  path="/dashboard/addWebService">
            <AddWebService></AddWebService>
          </PrivateRoute>

          <PrivateRoute  path="/dashboard/addPortfolio">
            <AddPortfolio></AddPortfolio>
          </PrivateRoute>

          <PrivateRoute  path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute  path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </>

    </Router>
    </UserContext.Provider>
    
  );
}

export default App;

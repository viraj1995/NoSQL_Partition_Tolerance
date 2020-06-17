import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './cashapp.png';
import '../App.css'
class Navbar extends Component {

   

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="http://localhost:3001"><img src={Image} height ='60' width='130'></img></a>

  
  <ul className=" nav navbar-nav navbar-right">
    <li className="nav-item ">
    {/*<a className="nav-link " L="http://localhost:3001/login">Login</a>*/}
        <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item">
      {/*<a className="nav-link" href="http://localhost:3001/signup">Signup</a>*/}
        <Link className="nav-link" to="/signup">Signup</Link>
    </li>
   
    

   
   
  </ul>
</nav>

  


        );
    }
}

export default Navbar;
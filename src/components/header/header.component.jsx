import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/crown.svg'; // this will importing the svg file as a ReactComponent and naming it Logo
import './header.styles.scss';
import { findRenderedComponentWithType } from "react-dom/test-utils";

// making this a functional component
const Header = () => (
  <div className="header">
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to="/shop">
     SHOP
    </Link>
    <Link className='option' to="/shop">
     CONTACT
    </Link>
    <Link className='option' to="/shop">
     SIGN IN
    </Link>
    </div>
  </div>
)
export default Header;

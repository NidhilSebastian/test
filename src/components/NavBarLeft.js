import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeIcon  from '../images/home.png';


export const  NAVIGATION_LINKs = {
    HOME_LINK: "Home",   
}


export class NavBarLeft extends Component {
    
    render() {
        return (
            <div className="nav-bar-left">
                  <ul className="sp-nav">
                  <li className="">
                        <Link to="/home"><img style={{height:22,width:22}} src={homeIcon} alt='' />Home</Link>
                    </li>
                    {/* <li className="">
                        <Link to="/details"><img style={{height:22,width:22}} src={homeIcon} alt='' />Details</Link>
                    </li> */}
                  </ul>
            </div>
        )
    }
}

export default NavBarLeft

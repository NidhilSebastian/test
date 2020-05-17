import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeIcon  from '../images/home.png';
import logout from '../images/logout.png'

export const  NAVIGATION_LINKs = {
    HOME_LINK: "Home",   
}



export class NavBarLeft extends Component {


    constructor(props) {
        super(props)       
    }
    

    onLogout = async (e) =>{
        await this.props.logoutUser();
    }
    
    render() {
        return (
            <div className="nav-bar-left">
                  <ul className="sp-nav">
                  <li className="">
                        <Link to="/home"><img style={{height:22,width:22}} src={homeIcon} alt='' />Home</Link>
                        <Link to="/"><img style={{height:22,width:22}} src={logout}  alt='' onClick={this.onLogout} />Logout</Link>
                    </li>                    
                  </ul>
            </div>
        )
    }
}

export default NavBarLeft

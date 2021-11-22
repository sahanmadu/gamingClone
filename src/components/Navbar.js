import React from 'react';
import "../styles/Navbar.css";
import logo3 from '../joystick.png';
import download from '../downloading.png';
import notifi from '../notification.png';


function Navbar() {
    return (
        <div className="navbar">
                <h3>Home</h3>
                <a href="#"><img src={logo3} width="50" height="30" /></a>
                <a href="#"><img src={logo3} width="50" height="30" /></a>
                <a href="#"><img src={logo3} width="50" height="30" /></a>
            
        </div>
    )
}

export default Navbar

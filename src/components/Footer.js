import React from 'react';
import logo3 from '../joystick.png';
import homeIcon from '../home.png';
import store from '../store.png';
import arena from '../fan.png';
import me from '../me.png';
import more from '../more.png';
import {Link} from 'react-router-dom';



function Footer() {
    return (
        <div className="footerbar">
               
                    <Link to="/"><img src={homeIcon} alt="home " width="40" height="20" /></Link>
                     <Link to=""><img src={store} width="40" height="20" /></Link>
                     <Link to="/arena"><img src={arena} width="40" height="20" /></Link>
                    <Link to=""><img src={me} width="40" height="20" /></Link>
                      <Link to=""><img src={more} width="40" height="20" /></Link>

              
             
             
               
              
            
        </div>
    )}

export default Footer

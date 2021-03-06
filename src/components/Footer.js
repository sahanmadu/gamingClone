import React from 'react';
import homeIcon from '../images/home.png';
import store from '../images/store.png';
import arena from '../images/fan.png';
import me from '../images/me.png';
import more from '../images/more.png';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';



function Footer() {
    return (
            <div className="img4">
                      <div className="row3">
                    <div className="mcard12">
                      <Link to="/"><img src={homeIcon} alt="home " width="20" height="20" /></Link>
                     <p className="txt79">Home</p>
                    
                     </div>
                   <div className="mcard12">
                       <Link to=""><img src={store} width="20" height="20" /></Link>
                     <p className="txt79">Store</p>
                    
                     </div>
                    <div className="mcard12">
                           <Link to="/arena"><img src={arena} width="20" height="20" /></Link>
                     <p className="txt79">Arena</p>
                    
                     </div>
                 <div className="mcard12">
                       <Link to=""><img src={me} width="20" height="20" /></Link>
                        <p className="txt79">Me</p>
                     </div>   
                    
                             
                 <div className="mcard12">
                        <Link to=""><img src={more} width="20" height="20" /></Link>    
                     <p className="txt79">More</p>
                                
                     </div>
                
                </div>
              
             
             
               
              
            
        </div>
    )}

export default Footer

import React from 'react';
import '../styles/Arena.css';
import i1 from '../coc.jpg';
import i2 from '../image2.jpg';
import i3 from '../image3.jpg';
import i4 from '../image4.jpg';
import i5 from '../image5.jpg';

function Arena() {
    return (
        <div>
           <div>
            <a href="" className="cardArena">
            <div className="inner">
                <h2 className="title">PlayGame Arena</h2>
            
            </div>
            </a>
           </div>
             <div>
            <a href="" className="cardArena2">
            <div className="inner2">
                <h2 className="title2">News</h2>
            
            </div>
            </a>
           </div>

            <div class="card54">
                    <p id="text2">Hot Games</p>
                    
                   
                        
                </div>
        
            <div className="container">
                <div className="row5">
                <div className="mcard5">
                     <img src={i1} width="200" height="150"/>
                     
                </div>
                <div className="mcard5">
                     <img src={i2} width="200" height="150"/>
                    
                </div>
                <div className="mcard5">
                     <img src={i3} width="200" height="150"/>
                    
                </div>
                <div className="mcard5">
                     <img src={i4} width="200" height="150"/>
                    
                </div>
                <div className="mcard5">
                     <img src={i5} width="200" height="150"/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Arena

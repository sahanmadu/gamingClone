import React from 'react'
import '../styles/Home.css'
import logo3 from '../joystick.png';
import i1 from '../image1.jpg';
import i2 from '../image2.jpg';
import i3 from '../image3.jpg';
import i4 from '../image4.jpg';
import i5 from '../image5.jpg';
import  g1 from '../g1.png';
import  g2 from '../g2.png';
import  g4 from '../g4.png';

function Home() {
    return (
        <div>
            <div className="component1">
                <div class="card">
                    <div>
                        <img src={g1} width="67" height="40"/>
                        <img src={g2} width="67" height="40"/>
                        <img src={g1} width="67" height="40"/>
                        <img src={g4} width="67" height="40"/>
                    </div>
                        <h1>Get your plan now</h1>
                        <p>Starting from $1.5/week</p>
                        <button id="btn1">Add plan</button>
                </div>

            </div>
              <div className="component2">
                <div class="card2">
                    <p id="text1">Unlimited</p>
                    <h3>High-speed Internet for</h3>
                   
                        
                </div>
            </div>
            
                  <div className="img2">
                      <div className="row1">
                           <div className="mcard9">
                        <img src={i4} width="65" height="50"/>
                         <p className="text78">PUBGM</p>
                        </div>
                        <div className="mcard9">
                        <img src={i4} width="65" height="50"/>
                         <p className="text78">Mobile Legends</p>
                        </div>
                        <div className="mcard9">
                        <img src={i4} width="65" height="50"/>
                         <p className="text78">Free Fire</p>
                        </div>
                        <div className="mcard9">
                        <img src={i4} width="65" height="50"/>
                         <p className="text78">RoS</p>
                        </div>
                       </div> 
                    </div>


            <div className="component2">
                <div class="card2">
                    <p id="text2">And more benefits</p>       
                </div>
        
            <div className="container">
                <div className="row">
                <div className="mcard">
                     <img src={i1} width="140" height="90"/>
                     <p className="text78">Free Internet Data up to 3GB</p>
                </div>
                <div className="mcard">
                     <img src={i2} width="140" height="90"/>
                     <p className="text78">Free On-net calls/SMS (up to 10,800)</p>
                </div>
                <div className="mcard">
                     <img src={i3} width="140" height="90"/>
                     <p className="text78">Free Playcoins (up to 600)</p>
                </div>
                <div className="mcard">
                     <img src={i4} width="140" height="90"/>
                     <p className="text78">Exclusive gaming offers</p>
                </div>
                <div className="mcard">
                     <img src={i5} width="140" height="90"/>
                     <p className="text78">Discount from our partners</p>
                </div>
                <div className="mcard">
                     <img src={i2} width="140" height="90"/>
                     <p className="text78">Exclusive gaming skins</p>
                </div>
                </div>
            </div>

            
            
            <div className="component3">
                <div class="card2">
                    <p id="text2">Available plans</p>
                    <p>Buy via your Cellcard or online payment</p>
                   
                        
                </div>
            </div>

             <div className="container">
                <div className="row">
                <div className="mcard1">
                     <img src={i1} width="140" height="90"/>
                     <p className="text">1-WEEK PLAN</p>
                     <p>$1</p>
                     <button className="btns">Get plan</button>
                </div>
                <div className="mcard2">
                     <img src={i2} width="140" height="90"/>
                     <p className="text">1-MONTH PLAN</p>
                     <p>$5</p>
                     <button className="btns">Get plan</button>
                </div>
                <div className="mcard3">
                     <img src={i3} width="140" height="90"/>
                     <p className="text">3-MONTHS PLAN</p>
                     <p>$13.5</p>
                     <p className="text2">(Only $4.5/month)</p>
                     <button>Get plan</button>
                </div>
                <div className="mcard4">
                     <img src={i4} width="140" height="90"/>
                     <p className="text">1-YEAR PLAN</p>
                     <p>$50</p>
                     <p className="text2">(Only $4.16/month)</p>
                     <button>Get plan</button>
                </div>
               
                </div>
            </div>


             <div className="component4">
                <div class="card4">
                    <p id="text2">Play Arena</p>
                    <p>Cambodia's first online gaming platform. Join 
                        tournament, climb leaderboards, and win prices!
                        Open to all gamers. Game on!                    
                    </p>
                    <button className="btnArena">Go To Play Arena</button>
                        
                </div>
            </div>


            
             <div className="container2">
                <div className="row">
                <div className="mcard">
                     <img src={i1} width="500" height="150"/>
                     <p className="txt79">37 days ago</p>
                    
                </div>
                <div className="mcard">
                     <img src={i2} width="500" height="150"/>
                     <p className="txt79">47 days ago</p>
                    
                </div>
                <div className="mcard">
                     <img src={i3} width="500" height="150"/>
                     <p className="txt79">55 days ago</p>
                    
                </div>
                <div className="mcard">
                     <img src={i4} width="500" height="150"/>
                     <p className="txt79">61 days ago</p>
                    
                </div>
               
                </div>
            </div>

               <div className="component5">
                <div class="card5">
                    <p id="text2">More about Playgame Unlimited</p>
                     <div className="youtube">
                  <img src={i4} width="350" height="150"/>
                  <img src={i3} width="350" height="150"/>
            </div>
                 
                </div>
                
            </div>
           
            </div>
        </div>
    )
}

export default Home

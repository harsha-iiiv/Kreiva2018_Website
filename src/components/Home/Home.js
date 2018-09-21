import React from 'react';
import './Home.css';
import Water from '../../assets/images/water.png';
import Logo from '../../assets/images/logo.png';
import Cloud from '../../assets/images/cloud.png';
import Pirate from '../../assets/images/pirate.png';
import Dolly from '../../assets/images/dolphin.svg';

export default () => {
  return (
    <div className="Home">
                <img id="Logo" src={Logo} alt="Logo" />
                <img id="Water" src={Water} alt="water" />
                <img id="Cloud1" src={Cloud} alt="cloud" />
                {/* <h1>Coming Soon...Stay Tuned</h1> */}
  
                <img id="Cloud2" src={Cloud} alt="cloud" />
                <img id="Cloud3" src={Cloud} alt="cloud" />
                <img id="Pirate" src={Pirate} alt="Pirate" />  
                <img id="Dolphin" src={Dolly} alt="Dolphin" />            
    </div>
  )
}

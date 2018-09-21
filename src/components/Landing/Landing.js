import React from 'react';
import './Landing.css';
import Water from '../../assets/images/water_2.png';
import Ship from '../../assets/images/kreiva-ui_ship_ship.png';
import Logo from '../../assets/images/logo.png';
const Landing = () => {
  return (
    <div className=" Landing container-fluid">
                <img  id="KreivaLogo" src={Logo} alt="Logo" />
                <h1 id="Heading">EVENTS</h1>
                <img id="Ship" src={Ship} alt="Ship"/>
                <img id="Water2" src={Water} alt="Water"/>  

    </div>

  )
}

export default Landing;

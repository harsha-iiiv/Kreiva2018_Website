import React from 'react';
import './Home.css';
import Water from '../../assets/images/water_2.png';
import Logo from '../../assets/images/mainLogo.png';
import Ship from '../../assets/images/kreiva-ui_ship_ship.png';
import Calendar from '../../assets/images/event.svg';

export default () => {
  return (
    <div className="Home container-fluid">
        <img id="MainLogo" src={Logo} alt="Logo"/>
        <img id="Water_Home"src={Water} alt="Water" />
        <img id="Ship_Home"src={Ship} alt="Ship" />
        <p id="Social_Home">Follow Us</p>
        <p id="Date_Home"><img  id = "Calendar"src={Calendar} alt="Calendar"/> 27-28th October, 2018</p>
    </div>
  )
}

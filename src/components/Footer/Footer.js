import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo.png';
import Handlers from '../../assets/images/Group 26 (1).svg';
const Footer = () => {
  return (
    <div className="Footer container-fluid">
        <img  id="FooterLogo" src={Logo} alt="Logo" /><br/>
        <img id="handlers" src={Handlers} alt="Handlers"/>
        <ul className="List">
            <li>Home</li>
            <li>Events</li>
            <li>Brochure</li>
            <li>Sponsors</li>
            <li>Team</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Footer;

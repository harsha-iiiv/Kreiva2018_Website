import React from 'react';
import './Event.css';
import Icon from '../../../assets/images/1_artastic.svg';
const Event= () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-sx-12">
        <div className="Event">
            <img id="Icon" src= {Icon} alt="icon"/>
            <h3>VISION</h3>
            <p>Photography Event</p>
            <button>VIEW</button> 
        </div>
    </div>
  )
}

export default Event;

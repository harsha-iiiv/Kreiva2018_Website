import React from 'react';
import './Member.css';
import Profile from '../../../assets/images/profile.jpeg';
const Member = () => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div className="Member">
      <img id="ProfileImage" src={Profile} alt="Profile" className="img-circle"/>
        <h3 id="ProfileName">Rohit Shamdasani</h3>
        <h5 id="ProfilePost">Lead Developer</h5>
      </div>
    </div>
  )
}

export default Member;

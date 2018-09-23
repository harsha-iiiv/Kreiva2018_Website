import React from 'react';
import './Members.css';
import Member from './Member/Member';
const Members = () => {
  return (
    <div className="Members container-fluid"> 
      <div>
      <h1 className="TeamTitle">TECHNICAL</h1>
        <div className="MembersList container">
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
        </div>
      </div>
    </div>
  )
}

export default Members;

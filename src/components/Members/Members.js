import React from 'react';
import './Members.css';
import Member from './Member/Member';
const Members = () => {
  return (
    <div className="Members container-fluid"> 
        <h1 className="TeamTitle">Technical team</h1>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
    </div>
  )
}

export default Members;

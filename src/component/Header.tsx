import React from 'react'
import moment from 'moment';

const Header = ({checkOn , checkOff}:any) => {
 const date = new Date();
 return (
  <div>
    <div className="grid-row">
       <div className="info">
        <h2 className="date-time">{moment().format("MMMM")} - {date.getDay()} - {date.getFullYear()}</h2>
        <div className="status">{checkOn.length} incomplete , {checkOff.length} completed</div>
       </div>
      </div>
  </div>
 )
}

export default Header

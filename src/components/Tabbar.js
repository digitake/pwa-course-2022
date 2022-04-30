import '../css/Tabbar.css';
import { Link } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        Online
  </Link>
      <Link to="/chat" className="tabbutton">
        ห้องระบายรวม
      </Link>
      <Link to="/profile" className="tabbutton">
        Profile
      </Link>
    </div>
  )
}

export default Tabbar;
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import React from 'react'
import {RiHomeHeartLine} from 'react-icons/ri'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaUserFriends} from 'react-icons/fa'


function Nav () {
  return (
    <div className="nav">
      <Link to="/profile" className="tabbutton">
        <RiHomeHeartLine/>
      </Link>
      <Link to="/chat" className="tabbutton">
        <HiOutlineUserGroup/>
      </Link>
      <Link to="/friend-list" className="tabbutton">
        <FaUserFriends/>
      </Link>
    </div>
  )
}

export default Nav;


import '../css/Nav.css';
import { Link } from 'react-router-dom';
import React from 'react'
import {RiHomeHeartLine} from 'react-icons/ri'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaUserFriends} from 'react-icons/fa'


function Nav () {
  return (
    <div className="nav">
      <Link to="/profile" >
        <RiHomeHeartLine/>
      </Link>
      <Link to="/chat" >
        <HiOutlineUserGroup/>
      </Link>
      <Link to="/friend-list" >
        <FaUserFriends/>
      </Link>
    </div>
  )
}

export default Nav;


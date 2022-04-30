import { useState } from 'react';
import '../css/Userlist.css';
import React from 'react'
import ReactDOM from 'react-dom'

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    setTrayStatus(oldStatus => oldStatus === "open" ? "closed" : "open");
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>x</div>
    </div>
  )
}

export default Userlist;
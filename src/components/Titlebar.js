import '../css/Titlebar.css';
import React from 'react'
import ReactDOM from 'react-dom'
function Titlebar ({value}) {
  return (
    <div className="titlebar">
      {value}
    </div>
  )
}
export default Titlebar;
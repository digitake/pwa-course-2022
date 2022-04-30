import '../css/Titlebar.css';
import React from 'react';

function Titlebar ({value}) {
  return (
    <div className="titlebar">
      {value}
    </div>
  )
}

export default Titlebar;
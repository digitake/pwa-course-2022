import '../css/Avatar.css';
import React from 'react'
import ReactDOM from 'react-dom'
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/big-ears-neutral/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatar;
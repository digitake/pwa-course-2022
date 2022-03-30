import Avatar from "./Avatar";
import "../css/Chatbox.css";
<<<<<<< HEAD
import { useRef, useEffect } from 'react';

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])
=======

function Chatbox (props) {
  let data = props.data;
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8

  return (
    <div className="chatbox">
      {
<<<<<<< HEAD
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <div>{item.displayName}</div>
=======
        data.map((item,index) => {
          return (<div key={index} className={`chatbox-item ${item.position}`}>
            <div>{item.user}</div>
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
            <Avatar name={item.user}/>
            <div className="chatbox-item-text"> {item.msg}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
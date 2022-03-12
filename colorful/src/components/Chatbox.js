import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  return (
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <div>{item.displayName}</div>
            <Avatar name={item.user}/>
            <div className="chatbox-item-text"> {item.msg}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
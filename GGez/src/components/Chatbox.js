import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';
import Chatline from "./Chatline";

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  return (
    
      <div className="mychatbox">
        {
        data.map((item,i) => {
          return (<div className="msgContainer clearfix"><div ref={myRef} key={`${item.key}-${i}`} className={`${item.position}`}>
            <Avatar name={item.displayName}/>
            <div className="msg">
            <div className="dpname">{item.displayName}</div>
              <div className="chatbox-item-text">
                <Chatline text={item.msg}/>
              </div>
            </div>
          </div></div>)
        })
        }
        </div>
      
    
  )
}

export default Chatbox;
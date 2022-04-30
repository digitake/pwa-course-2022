import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';
import Chatline from "./Chatline";

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)


  //   (cond) ?  A : B
  //   if (cond) {
  //     A
  //   } else {
  //     B
  //   }

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  return (
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <div>{item.displayName}</div>
            <div className="chatbox-item-text">
              { ((item.position ==="left") ? 
                <>
                  <Chatline text={item.msg}/> 
                  <Avatar name={item.displayName}/>
                </>
                  :
                <>
                <Avatar name={item.displayName}/>
                <Chatline text={item.msg}/> 
                </>)
              }
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
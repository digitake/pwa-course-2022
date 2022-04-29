import {Avatar , Stack} from "@mui/material";
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
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <h4>{item.displayName}</h4>
            <Stack direction="row" spacing={3} className="postHeader" alignItems = "center">
            <Avatar sx={{ width: 56, height: 56 }}>{item.displayName}</Avatar>
            <div className="chatbox-item-text">
              <Chatline text={item.msg}/>
            </div>
            </Stack>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
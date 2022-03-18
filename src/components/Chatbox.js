import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  function textToHtml(text) {
    //dangerouslySetInnerHTML={{__html: item.msg}}
    if (text.startsWith("http")) {
      return <Link to={text}>{text}</Link>
    } else if (text.startsWith("<iframe")) {
      return <div dangerouslySetInnerHTML={{__html: text}}></div>
    } else {
      return text;
    }
  }

  return (
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <div>{item.displayName}</div>
            <Avatar name={item.displayName}/>
            <div className="chatbox-item-text">{textToHtml(item.msg)}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
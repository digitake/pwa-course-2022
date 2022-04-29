import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from "react";
import Chatline from "./Chatline";

function Chatbox(props) {
  let data = props.data;
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView();
  }, [data]);

  return (
    <div className="chatbox">
      {data.map((item, i) => {
        return (
          <div
            ref={myRef}
            key={`${item.key}-${i}`}
            className={`chatbox-item ${item.position}`}
          >
            <div className={`chatbox-item-user ${item.position}`}>
              <Avatar name={item.displayName} base64Image={item.image} />
              <div className="text">
                <div className="username">{item.displayName}</div>
                <div className={`chatbox-item-text ${item.position}`}>
                  <Chatline text={item.msg} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chatbox;

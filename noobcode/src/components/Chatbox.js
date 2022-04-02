import Avatar from "./Avatar";
import "../css/Chatbox.css";

function Chatbox (props) {
  let data = props.data;

  return (
    <div className="chatbox">
      {
        data.map((item,index) => {
          return (<div key={index} className={`chatbox-item ${item.position}`}>
            <div>{item.user}</div>
            <Avatar name={item.user}/>
            <div className="chatbox-item msg"> {item.msg}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
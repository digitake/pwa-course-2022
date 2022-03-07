import Avatar from "./Avatar";
import "../css/Chatbox.css";

function Chatbox (props) {
  let data = props.data;

  return (
    <div className="chatbox">
      {
        data.map((item) => {
          return (<div key={item.key} className={`chatbox-item ${item.position}`}>
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
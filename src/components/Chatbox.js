import Avatar from "./Avatar";
import "../css/Chatbox.css";

function Chatbox (props) {
  let data = props.data;

  return (
    <div className="chatbox">
      {
        data.map((item) => {
          return (<div className={`chatbox-item ${item.position}`}>
            <Avatar name={item.user}/>
            <div className="chatbox-item-text"> {item.msg} </div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;
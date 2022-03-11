import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
      <img src = "/Friends_icon.png" className="tab-icon"/>
        Friend List
      </Link>
      <Link to="/chat" className="tabbutton">
        <img src = "/Chats_hover.svg" className="tab-icon"/>
        Chats
      </Link>
      <Link to="/profile" className="tabbutton">
      <img src = "/Profile_icon.png" className="tab-icon"/>
        Profile
      </Link>
      
    </div>
  )
}

export default Tabbar;
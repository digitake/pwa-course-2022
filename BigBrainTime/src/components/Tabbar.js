import '../css/Tabbar.css';
import { Link } from 'react-router-dom';


function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
          <img src="/icon-image/home.png" className="tab-icon" />
      </Link>
      <Link to="/chat" className="tabbutton">
        <img src="/icon-image/chat-01.png" className="tab-icon" />
      </Link>
      <Link to="/profile" className="tabbutton">
        <img src="/icon-image/profile-01.png" className="tab-icon" />
      </Link>
    </div>
  )
}

export default Tabbar;
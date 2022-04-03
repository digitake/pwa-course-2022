import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        Friend List
      </Link>
      <Link to="/chat" className="tabbutton">
        Chat
      </Link>
      <Link to="/profile" className="tabbutton">
        Profile
      </Link>
    </div>
  )
}

export default Tabbar;
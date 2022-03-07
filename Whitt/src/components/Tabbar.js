import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/search-friends" className="tabbutton">
        Search Friends
      </Link>
      <Link to="/chat" className="tabbutton">
        Chat
      </Link>
      <Link to="/profileapp" className="tabbutton">
        ProfileApp
      </Link>
    </div>
  )
}

export default Tabbar;
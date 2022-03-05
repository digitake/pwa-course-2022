import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        <i class="fa fa-envelope-open" aria-hidden="true"></i>
      </Link>
      <Link to="/chat" className="tabbutton">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </Link>
      <Link to="/profile" className="tabbutton">
        <i class="fa fa-play" aria-hidden="true"></i>
      </Link>
    </div>
  )
}

export default Tabbar;
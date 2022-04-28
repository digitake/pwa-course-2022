import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        Onilne
      </Link>
      {/*<Link to="/privatechat/:uid" className="tabbutton">
        Chat
  </Link>*/}
      <Link to="/profile" className="tabbutton">
        Profile
      </Link>
    </div>
  )
}

export default Tabbar;
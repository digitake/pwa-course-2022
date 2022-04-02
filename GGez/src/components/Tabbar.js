import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        <i class="fa fa-list-ul" aria-hidden="true"></i>
      </Link>
      <Link to="/chat" className="tabbutton">
        <i class="fa fa-weixin" aria-hidden="true"></i>
      </Link>
      <Link to="/profile" className="tabbutton">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </Link>
    </div>
  )
}

export default Tabbar;
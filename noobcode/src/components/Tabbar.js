import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        <div><i class="fa fa-home" aria-hidden="true"></i></div>
      </Link>
      <Link to="/chat" className="tabbutton">
      <div><div><i class="fa fa-commenting" aria-hidden="true"></i></div></div>
      </Link>
      <Link to="/profile" className="tabbutton">
      <div> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </div>
      </Link>
    </div>
  )
}

export default Tabbar;
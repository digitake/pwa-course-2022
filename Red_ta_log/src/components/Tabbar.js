import '../css/Tabbar.css';
import { Link } from 'react-router-dom';


function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        Friends
      </Link>
      <Link to="/Live" className="tabbutton">
        Live
      </Link> 
      <Link to="/profile" className="tabbutton">
        Account
      </Link> 
    </div>
  )
}

export default Tabbar;
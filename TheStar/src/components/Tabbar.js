import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        
      </Link>
      <Link to="/chat" className="tabbutton">
        ห้องแชท
      </Link>
      <Link to="/profile" className="tabbutton">
        โปรไฟล์
      </Link>
    </div>
  )
}

export default Tabbar;
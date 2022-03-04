import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        รายชื่อเพื่อน
      </Link>
      <Link to="/chat" className="tabbutton">
        แชท
      </Link>
      <Link to="/profile" className="tabbutton">
        โปรไฟล์
      </Link>
    </div>
  )
}

export default Tabbar;
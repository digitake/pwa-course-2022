import '../css/Tabprofile.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        ย้อนกลับ
      </Link>
      <Link to="/profile" className="tabbutton">
        คุณหนู02
      </Link>
      <Link to="/call" className="tabbutton">
        โทร
      </Link>
    </div>
  )
}

export default Tabbar;
import '../css/TabbarTop.css';
import { Link } from 'react-router-dom';

function TabbarTop () {
  return (
    <div className="TabbarTop">
      <Link to="/profile" className="tabbutton">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </Link>
    </div>
  )
}

export default TabbarTop;
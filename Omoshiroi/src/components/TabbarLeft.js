import '../css/TabbarLeft.css';
import { Link } from 'react-router-dom';

function Userlist () {
  return (
    <div className="tabbar-left">
      <Link to="/friend-list" className='t_list img_fri'></Link>
      <Link to="/friend-list" className="tabbar-button">
        Friend List
      </Link>
      <Link to="/chat" className='t_list img_chat'></Link>
      <Link to="/chat" className="tabbar-button">
        Chat
      </Link>
      <Link to="/profile" className='t_list img_pro'></Link>
      <Link to="/profile" className="tabbar-button">
        Profile
      </Link>
    </div>
  )
}

export default Userlist;
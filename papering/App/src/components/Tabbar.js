import '../css/Tabbar.css';
import {Link} from 'react-router-dom';
import ChatIcon from './ChatIcon';
import FriendsIcon from './FriendsIcon';
import ProfileIcon from './ProfileIcon';

function Tabbar() {
    return (
        <div className="tabbar stick-bottom">
            <Link to="/friend-list" className="tabbutton">
                <div className="tabbar button">
                    <FriendsIcon/>
                    Friends
                </div>
            </Link>
            <Link to="/chat" className="tabbutton">
                <div className="tabbar button">
                    <ChatIcon/>
                    Chats
                </div>
            </Link>
            <Link to="/profile" className="tabbutton">
                <div className="tabbar button">
                    <ProfileIcon/>
                    Profile
                </div>
            </Link>
        </div>
    );
}

export default Tabbar;
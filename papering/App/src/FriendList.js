import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import {useChatStateContext} from './context/FirebaseChatContextProvider';
import {Link} from 'react-router-dom';
import Topbar from "./components/Topbar";


function FriendList() {
    const {userList} = useChatStateContext();

    return (
        <App>
            <div className="friend-list-item">
                <Topbar title="Friends"/>
                <div className="friend-list">
                    {
                        userList.map((item) => {
                            return (
                                <Link to={`/privatechat/${item.key}`} key={item.key}>
                                    <div className={`friend-list-single ${item.position}`}>
                                        <Avatar name={item.displayName}/>
                                        <div className="friend-text">{item.displayName}</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </App>
    )
}

export default FriendList;
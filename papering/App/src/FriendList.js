import "./FriendList.css";
import App from "./components/App";
import Avatar from "./components/Avatar";
import { useChatStateContext } from "./context/FirebaseChatContextProvider";
import { Link } from "react-router-dom";
import Topbar from "./components/Topbar";

function FriendList() {
  const { userList, imageDict, userDict } = useChatStateContext();

  return (
    <App>
      <div className="friend-list list">
        <Topbar title="Friends" />
        <div className="friend-list">
          {userList.map((item) => {
            return (
              <Link to={`/privatechat/${item.key}`} key={item.key}>
                <div className={`friend-list-item ${item.position}`}>
                  <Avatar
                    name={item.displayName}
                    base64Image={imageDict[item.key]}
                  />
                  <div className="friend-list username">{item.displayName}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </App>
  );
}

export default FriendList;

import { useEffect, useState } from 'react';
import Chatbox from './components/Chatbox.js';
import Inputbox from './components/Inputbox.js';
import Tabbar from './components/Tabbar';
import './css/Chat.css'
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function PublicChat() {
    const { sendMsg, listenToChatroom, imageDict, userDict } = useChatStateContext();
    const { authState } = useAuthStateContext();
  
    const [chatData, setChatData] = useState([]);
  
  
    function onMsg(msg) {
      setChatData(oldChat => [msg, ...oldChat]);
    }
  
    function transformChatData(item) {
      let displayName = "ไม่ทราบชื่อ(Offline)";
      if (item.user in userDict && userDict[item.user].displayName){
        displayName = userDict[item.user].displayName;
      } else if (item.user === authState.user.uid) {
        displayName = authState.user.displayName;
      }
      
      return ({
        ...item,
        key: item.timestamp || Date.now(),
        displayName: displayName,
        image: imageDict[item.user] || "",
        position: item.user === authState.user.uid ? "right" : "left"
      });
    }
  
    useEffect(() => {
      const unsubscribeChatroom = listenToChatroom('mainhall', onMsg);
  
      return () => {
        unsubscribeChatroom();
      }
    }, []);

    return(
        <div className='chat'>
            <div className='ctop'>Public Chat</div>
            <Chatbox data={chatData.map(transformChatData).sort((b,a)=>a.timestamp - b.timestamp)}/>
            <div className='cbottom'>
                <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
            </div>
            <Tabbar/>
        </div>
    );
}

export default PublicChat;
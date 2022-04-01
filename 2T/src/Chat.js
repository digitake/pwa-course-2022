import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbox from './components/Chatbox.js';
import Inputbox from './components/Inputbox.js';
import './css/Chat.css';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useParams } from "react-router-dom";

function Chat() {

    const { uid } = useParams();
    const { getUserProfile, sendPrivateMsg, listenToPrivateChat } = useChatStateContext();
    const [ friendName, setFriendName ] = useState("");
    const [ chatData, setChatData ] = useState([]);
  
    const onMsg = (msg) => {
      
      const mappedValue = {
        ...msg,
        key: msg.timestamp || Date.now(),
        displayName: friendName,
        position: msg.user === uid ? "left" : "right"
      };
      
      setChatData(oldChat => [...oldChat ,mappedValue]);
    }
  
    useEffect(() => {
      getUserProfile(uid)
      .then(friend => {
        friend && setFriendName(friend.displayName);
        return friend;
      })
  
      const unsubscribePrivateChat = listenToPrivateChat(uid, onMsg);
  
      return () => {unsubscribePrivateChat()}
    }, [uid]);
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return(
        <div className='chat'>
            <div className='ctop' value={friendName}>
                <Link to='/main' className='backbutton'>
                    BACK
                </Link>
            </div>
            <Chatbox data={chatData}/>
            <div className='cbottom'>
                <Inputbox onEnter={x=>sendPrivateMsg(x,uid)}/>
            </div>
        </div>
    );
  }
  
  export default Chat;
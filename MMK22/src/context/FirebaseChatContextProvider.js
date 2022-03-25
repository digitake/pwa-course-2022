import React, { createContext, useContext, useState, useEffect } from "react";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {firebase} from './FirebaseConfig';

const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0)

const ChatStateContext = createContext({
  userList: [],
  chatroomList: []
});

export default function ChatStateProvider({ children, self }) {
  const usersRef = firebase.database().ref('users');
  const chatroomsRef = firebase.database().ref('chatrooms');

  const [userList, setUserList] = useState([]);
  const [chatroomList, setChatroomList] = useState([]);

  const chat = msg => ({ msg: msg, user: self.uid, timestamp: firebase.database.ServerValue.TIMESTAMP });
  

  useEffect(() => {
    const unregisterChatObserver = usersRef.on('child_added', snapshot => {
      
      const excludeSelf = x=> x.key !== self.uid;
      setUserList(oldList => [...oldList.filter(excludeSelf), {
        ...snapshot.val(),
        key: snapshot.key
      }]
      );
    });

    const unregisterChatObserverChildRemoved = usersRef.on('child_removed', snapshot => {

      const userId = snapshot.key;
      
      const excludeSelf = x=> x.key !== userId;
      setUserList(oldList => oldList.filter(excludeSelf));
    });

    console.log("self checkin to firebase", self);
    const x = usersRef.child(self.uid)
    x.set({
      displayName: self.displayName,
    })
    x.onDisconnect().remove();

    return () => {
      unregisterChatObserver();
      unregisterChatObserverChildRemoved();
    }
    // eslint-disable-next-line
  }, []);

  const getUserProfile = uid => {
    return usersRef.child(uid).once('value').then(snapshot => {
      return snapshot.val();
    });
  };

  const getPrivateChat = (friendId) => {
    const chatroomId = `1-1-${hashCode(self.uid) + hashCode(friendId)}`;
    return chatroomsRef.child(`${chatroomId}`).once('value').then(snapshot => {
      return snapshot.val();
    });
  };

  const listenToPrivateChat = (friendId, callback) => {
    const chatroomId = `1-1-${hashCode(self.uid) + hashCode(friendId)}`;
    return chatroomsRef.child(`${chatroomId}/chat`).on('child_added', snapshot => {
      // {roomTitle, users, chat}
      snapshot && callback(snapshot.val());
    });
  };

  const sendPrivateMsg = (msg, friendId) => {
    const chatroomId = `1-1-${hashCode(self.uid) + hashCode(friendId)}`;
    const chatroomRef = chatroomsRef.child(`${chatroomId}/chat`);
    chatroomRef.push(chat(msg));
  };

  const getChatroom = (roomId) => {
    return chatroomsRef.child(`${roomId}`).once('value').then(snapshot => {
      // {roomTitle, users, chat}
      return snapshot.val();
    });
  };

  const listenToChatroom = (roomId, callback) => {
    return chatroomsRef.child(`${roomId}/chat`).on('child_added', snapshot => {
      // {roomTitle, users, chat}
      snapshot && callback(snapshot.val());
    });
  };

  const sendMsg = (msg, targetId) => {
    const chatroomRef = chatroomsRef.child(`${targetId}/chat`);
    chatroomRef.push(chat(msg));
  };
  

  return (
    <ChatStateContext.Provider
      value={{
        userList: userList,
        chatroomList: chatroomList,
        getUserProfile: getUserProfile,
        getPrivateChat: getPrivateChat,
        listenToPrivateChat: listenToPrivateChat,
        sendPrivateMsg: sendPrivateMsg,
        getChatroom: getChatroom,
        listenToChatroom: listenToChatroom,
        sendMsg: sendMsg
      }}
    >
      {children}
    </ChatStateContext.Provider>
  );
}

export const useChatStateContext = () => useContext(ChatStateContext);
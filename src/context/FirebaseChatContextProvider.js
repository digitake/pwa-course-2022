import React, { createContext, useContext, useState, useEffect } from "react";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {firebase} from './FirebaseConfig';


const ChatStateContext = createContext({
  userList: [],
  chatroomList: []
});

export default function ChatStateProvider({ children, self }) {
  const usersRef = firebase.database().ref('users');
  const chatroomsRef = firebase.database().ref('chatrooms');

  const [userList, setUserList] = useState([]);
  const [chatroomList, setChatroomList] = useState([]);

  useEffect(() => {
    const unregisterChatObserver = usersRef.on('child_added', snapshot => {

      const userId = snapshot.key;
      const user = snapshot.val();
      console.log(userId, 'user');
      console.log(self.uid, 'self');
      if (userId === self.uid) {
        console.log("got me", user)
      }
      const excludeSelf = x=> x.key !== self.uid;
      setUserList(oldList => [...oldList.filter(excludeSelf), {
        ...snapshot.val(),
        key: snapshot.key
      }]
      );
    });

    const unregisterChatObserverChildRemoved = usersRef.on('child_removed', snapshot => {

      const userId = snapshot.key;
      const user = snapshot.val();
      
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

  return (
    <ChatStateContext.Provider
      value={{
        userList: userList,
        chatroomList: chatroomList,
        getUserProfile: getUserProfile,
      }}
    >
      {children}
    </ChatStateContext.Provider>
  );
}

export const useChatStateContext = () => useContext(ChatStateContext);
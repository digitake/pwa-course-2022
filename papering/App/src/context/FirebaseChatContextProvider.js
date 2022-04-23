/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from "react";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import firebase from './FirebaseConfig';

const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0)

const ChatStateContext = createContext({
  userList: [],
  chatroomList: []
});

export default function ChatStateProvider({ children, self }) {
  const usersRef = firebase.database().ref('users');
  const chatroomsRef = firebase.database().ref('chatrooms');
  const imagesRef = firebase.database().ref('images');

  const [userList, setUserList] = useState([]);
  const [userDict, setUserDict] = useState({});
  const [imageDict, setImageDict] = useState({});
  const [chatroomList, setChatroomList] = useState([]);

  const chat = msg => ({ msg: msg, user: self.uid, timestamp: firebase.database.ServerValue.TIMESTAMP });

  const setImage = (imageId, base64Img) => {
    const x = imagesRef.child(`${imageId}`)
    x.set(base64Img);
    return x;
  };

  const getImage = (imageId) => {
    return imagesRef.child(`${imageId}`).once('value').then(snapshot => {
      return snapshot.val();
    })
  };
  
  useEffect(() => {
    usersRef.on('child_added', snapshot => {
      const excludeSelf = x=> x.key !== self.uid;
      setUserList(oldList => [...oldList.filter(excludeSelf), {
        ...snapshot.val(),
        key: snapshot.key
      }]);
      setUserDict(oldDict => ({...oldDict, [snapshot.key]: snapshot.val()}));
    });

    imagesRef.on('child_added', snapshot => {
      setImageDict(oldDict => ({...oldDict, [snapshot.key]: snapshot.val()}));
    });

    usersRef.on('child_removed', snapshot => {
      const userId = snapshot.key;
      const exclude = x=> x.key !== userId;

      setUserList(oldList => oldList.filter(exclude));
      setUserDict(oldDict => {
        const newDict = {...oldDict};
        delete newDict[userId];
        return newDict;
      });
    });

    imagesRef.on('child_removed', snapshot => {
      setImageDict(oldDict => {
        const newDict = {...oldDict};
        delete newDict[snapshot.key];
        return newDict;
      });
    });

    imagesRef.on('child_changed', snapshot => {
      setImageDict(oldDict => ({...oldDict, [snapshot.key]: snapshot.val()}));
    });

    const me = usersRef.child(self.uid)
    me.set({
      displayName: self.displayName,
    })
    me.onDisconnect().remove();

    return () => {
      usersRef.off();
      imagesRef.off()
    }
    // eslint-disable-next-line
  }, []);

  const getUserProfile = uid => {
    return usersRef.child(uid).once('value').then(snapshot => {
      return snapshot.val();
    });
  };

  const setUserImage = (uid, base64Img) => {
    const x = imagesRef.child(`${uid}`)
    x.set(base64Img);
    return x;
  };

  const getUserImage = (uid) => {
    return imagesRef.child(`${uid}`).once('value').then(snapshot => {
      return snapshot.val();
    })
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
    console.log("self checkin to roomId", roomId);
    const x = chatroomsRef.child(`${roomId}/users/${self.uid}`);
    x.set({
      displayName: self.displayName,
    })
    x.onDisconnect().remove();

    return chatroomsRef.child(`${roomId}/chat`).on('child_added', snapshot => {
      // {roomTitle, users, chat}
      snapshot && callback(snapshot.val());
    });
  };

  const listenToUserInChatroom = (roomId, callback) => {
    const x= chatroomsRef.child(`${roomId}/users`)
    x.on('child_added', snapshot => {
      snapshot && callback('JOINED',snapshot.key, snapshot.val());
    });
    x.on('child_removed', snapshot => {
      snapshot && callback('LEFT', snapshot.key, snapshot.val());
    });
    return () => {
      x.off('child_added');
      x.off('child_removed');
    }
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
        imageDict: imageDict,
        userDict: userDict,
        getUserProfile: getUserProfile,
        getPrivateChat: getPrivateChat,
        listenToPrivateChat: listenToPrivateChat,
        sendPrivateMsg: sendPrivateMsg,
        getChatroom: getChatroom,
        listenToChatroom: listenToChatroom,
        listenToUserInChatroom: listenToUserInChatroom,
        sendMsg: sendMsg,
        setUserImage: setUserImage,
        getUserImage: getUserImage
      }}
    >
      {children}
    </ChatStateContext.Provider>
  );
}

export const useChatStateContext = () => useContext(ChatStateContext);
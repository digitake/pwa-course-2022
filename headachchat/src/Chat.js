import './Chat.css';
import './Component/Label.css'
import ChatBox from './Component/ChatBox'
import ChatSend from './Component/ChatSend'
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';


function App() {
  const chatData =[]
  const [chats,setChats] = useState(chatData)

function onAddNewChat (newChat) {

  /*console.log("ข้อมูลจากฟอร์ม", newChat)*/
  setChats((previChat)=>{
    return[...previChat,newChat]
  })

}



  return (
   <div>
     <head className='label head'>ชื่อ</head>
     <ChatSend chat ={chats} />
     
<div className='chatboxcont'><ChatBox onAddChat={onAddNewChat} /></div>
     
     

   </div>
  );
}

export default App;


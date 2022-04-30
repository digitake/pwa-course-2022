import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import React from 'react'
import ReactDOM from 'react-dom'
function Profile() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);
  const [quote, setQuote] = useState("กำลังใจไหมคะ?");

  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
  }

  function changeQuote(){
    if(quote === "กำลังใจไหมคะ?"){
    setQuote("เลือกมองแต่สิ่งดีๆ แล้วชีวิตจะแฮปปี้");
    } if (quote === "เลือกมองแต่สิ่งดีๆ แล้วชีวิตจะแฮปปี้"){
    setQuote("มันก็เป็นแค่วันแย่ๆ แต่ไม่ใช่ทั้งชีวิตหรอกที่แย่");
    } if (quote=== "มันก็เป็นแค่วันแย่ๆ แต่ไม่ใช่ทั้งชีวิตหรอกที่แย่"){
    setQuote("หมื่นทางตัน ยังมีทางหนึ่งให้ออกเสมอ");
    } if (quote=== "หมื่นทางตัน ยังมีทางหนึ่งให้ออกเสมอ"){
      setQuote("ตราบใดที่ยังมีชีวิตอยู่ ยังมีความหวังเสมอ");
      }
      if (quote=== "ตราบใดที่ยังมีชีวิตอยู่ ยังมีความหวังเสมอ"){
        setQuote("กำลังใจไหมคะ?");
        }
  }
  return (
    <App>
      <div className="Profile">
      <img src="logo512.png" width="192" height="192"/>
        {/*<Avatar name={name}/>*/}
        <label className="label1" htmlFor="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="quote">{quote}</div>
        <input className="button" type="button" value="กำลังใจ" onClick={changeQuote}/>
        
        <input className="button" type="button" value="Save" onClick={save}/>
        <input className="button signout" type="button" onClick={() => signOut()} value="Sign out"/>
      </div>
    </App>
  );
}

export default Profile;
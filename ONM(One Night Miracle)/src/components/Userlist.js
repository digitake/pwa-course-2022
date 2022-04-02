<<<<<<< HEAD:ONM(One Night Miracle)/src/components/Userlist.js
import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    setTrayStatus(oldStatus => oldStatus === "open" ? "closed" : "open");
  }

=======
export function Userlist () {
>>>>>>> 8a7d2f9f4c4fc4e54e255647f5a068b78c099c8b:2T/src/components/Userlist.js
  return (
    <div className="userlist">
    </div>
  )
}
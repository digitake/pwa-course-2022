import './App.css';

function Userlist () {
  return (
    <div className="userlist">
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <text class="Username">Username</text>
      <Userlist/>
      <p>Test Chatbox...</p>
      <span class="time-right">11:00</span>
      <Chat/>
      <input type="text" placeholder="Message.."></input>
      <a class="active" href="javascript:alert('Your message was send.')">Send</a>
      <Inputbox/>
    </div>
  );
}

export default App;

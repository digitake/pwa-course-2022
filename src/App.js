import './App.css';

function Userlist () {
  return (
    <div className="userlist">
      <h1>Chat</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
      <h2>สวัสดี</h2>
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
      <h2>Send</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
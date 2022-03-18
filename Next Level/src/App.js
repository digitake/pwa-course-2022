import './App.css';
import { Chat } from'./components/Chat.js';
import { Userlist } from'./components/Userlist.js';
import { Inputbox } from'./components/Inputbox.js';

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

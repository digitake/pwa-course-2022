import './App.css';
import { Chatbox } from'./components/Chatbox.js';
import { Userlist } from'./components/Userlist.js';
import { Inputbox } from'./components/Inputbox.js';

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chatbox/>
      <Inputbox/>
    </div>
  );
}

export default App;

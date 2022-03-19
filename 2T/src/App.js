import './App.css';
import { Chat } from'./components/Chat.js';
import { Head } from'./components/Head.js';
import { Inputbox } from'./components/Inputbox.js';

function App() {
  return (
    <div className="App">
      <Head/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;

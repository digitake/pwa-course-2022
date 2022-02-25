import './App.css';
import Chat from './Chat.js';
import Tabbar from './components/Tabbar.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Chat/>
      </div>
      <Tabbar/>
    </div>
  );
}

export default App;

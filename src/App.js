import './App.css';
import Tabbar from './components/Tabbar.js';

function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
      <Tabbar/>
    </div>
  );
}

export default App;
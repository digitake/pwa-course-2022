import '../css/App.css';
import Tabbar from './Tabbar.js';

function App(props) {
  return (
    <div className="App">
      <Tabbar/>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

export default App;

import '../css/App.css';
import Tabbar from './Tabbar.js';
import Topbar from './Topbar.js';


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

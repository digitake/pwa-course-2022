import '../css/App.css';
import Tabbar from './Tabbar.js';
import Userlist from './Userlist.js';

function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
      <Userlist />
    </div>
  );
}

export default App;

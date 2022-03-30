import '../css/App.css';
import Tabbar from './Tabbar.js';
<<<<<<< HEAD
import Userlist from './Userlist.js';
=======
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8

function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
<<<<<<< HEAD
      <Userlist />
=======
      <Tabbar/>
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
    </div>
  );
}

export default App;

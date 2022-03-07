import '../css/App.css';
import Tabbar from './Tabbar.js';
import TabbarTop from './TabbarTop.js';

function App(props) {
  return (
    <div className="App">
      <TabbarTop/>
      <div className="content">
        {props.children}
      </div>
      <Tabbar/>
    </div>
  );
}

export default App;

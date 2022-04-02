import '../css/App2.css';
import TabbarUp from './TabbarUp.js';

function App2(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
      <TabbarUp></TabbarUp>
    </div>
  );
}

export default App2;

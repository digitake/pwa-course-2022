import '../css/App.css';
import TopNav from './TopNav';

function App(props) {
  return (
    <div className="App">
      <TopNav/>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}


export default App;

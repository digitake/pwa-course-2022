import '../css/App.css';

function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

export default App;

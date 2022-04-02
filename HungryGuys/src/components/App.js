import '../css/App.css';
import Tabbar from './Tabbar.js';

function App(props) {
  return (
    <div className="App">
      <Tabbar/>
      <div className="content">
        {props.children}
      </div>
<<<<<<< HEAD:HungryGuys/src/components/App.js
      
=======
    
>>>>>>> 342f6ac3e108d2558f4593f514c956ec41342989:lek mai pak/code/src/components/App.js
    </div>
  );
}

export default App;

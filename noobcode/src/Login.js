import App from './components/App.js';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {

  return (
    <App>
      
      <div className="login " >
      <h1 class="display-2" align = "center">Login</h1>
      <p></p><p></p><p></p><p></p><p></p>
      <form>
      <div class="form-floating mb-3">
         <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
         <label for="floatingInput">Email address</label>
         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        
      <div class="form-floating">
         <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
         <label for="floatingPassword">Password</label>
        </div>

        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Save email address</label>
        </div>
        <button type="button" class="btn btn-outline-success" ><Link to="/friend-list" role="button">     
            submit
            </Link></button>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">New around here? Sign up</a>
            <a class="dropdown-item" href="#">Forgot password?</a>

       </form>

  
      </div>
    </App>
  );
}

export default Login;
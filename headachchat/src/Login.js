import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src="https://i.ibb.co/wCkHC5t/logo512.png" />
      <input className='loginBox' type ="text" placeholder='Put In Your Name'></input>
      <button className='submit' type='submit'>Submit</button>
      </header>
    </div>
  );
}

export default Login;

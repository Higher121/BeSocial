import  { useState } from 'react';
import './SignLog.css';  
import { Link } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <form onSubmit={handleSubmit} id='LoginForm' className='designForm'>
    <h2  style={{ marginTop:'5px', textAlign:"center", color:'blue'}} >Login</h2>
      <div className="form-group " id='form-div'>


        <label htmlFor="exampleInputEmail1" className="custom-label">Email address</label>
        <input 
          type="email" 
          className="form-control custom-input" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted customText">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group" id='form-div'>
        <label htmlFor="exampleInputPassword1" className="custom-label">Password</label>
        <input 
          type="password" 
          className="form-control custom-input" 
          id="exampleInputPassword1" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-check customCheck" id='form-div' >
        <input 
          type="checkbox" 
          className="form-check-input " 
          id="exampleCheck1"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          required
        />
        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
      </div>
      <button  type="submit" className="btn btn-primary customBtn">Submit</button>
    <div id='form-div' className='signup-link'>
  <Link as={Link} to="/signup">Not a Member SignUp Now</Link>    
    </div>
    </form>
  );
}

export default LogIn;

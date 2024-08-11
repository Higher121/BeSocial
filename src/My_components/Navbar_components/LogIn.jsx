import { useState } from 'react';
import './SignLog.css';  
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Home } from '../../Home';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setFormError] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Attempting to log in:', { email, password, rememberMe });

    try {
      const response = await axios.post('http://besocialssr.netlify.app/api/login', { email, password });
      
      if (response.status === 200) {
        alert('Login successful!');
        setIsLoggedIn(true);
        const { fullName } = response.data;
        setFullName(fullName);
        console.log('Login successful, full name:', fullName);
      } else {
        setFormError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login request error:', error);
      setFormError('Failed to login user.');
    }
  };

  if (isLoggedIn) {
    return <Home fullName={fullName} />;
  }

  return (
    <form onSubmit={handleSubmit} id='LoginForm' className='designForm'>
      <h2 style={{ marginTop: '5px', textAlign: 'center', color: 'blue' }}>Login</h2>
      <div className="form-group" id='form-div'>
        <label htmlFor="exampleInputEmail1" className="custom-label">Email address</label>
        <input 
          type="email" 
          className="form-control custom-input" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small id="emailHelp" className="form-text text-muted customText">
          We will never share your email with others.
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
      <div className="form-check customCheck" id='form-div'>
        <input 
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
      </div>
      {formError && <div className="error">{formError}</div>}
      <button type="submit" className="btn btn-primary customBtn">Submit</button>
      <div id='form-div' className='signup-link'>
        <Link to="/signup">Not a Member? Sign Up Now</Link>    
      </div>
    </form>
  );
}

export default LogIn;

import { useState } from 'react';
import './SignLog.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';
import LogIn from './LogIn';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [agreedT_C, setAgreedT_C] = useState(false);

  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [formError, setFormError] = useState('');

  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formValid = true;
    let errorMessage = '';

    // Check if any field is empty
    if (!fullName || !countryCode || !mobileNumber || !email || !password || !confirmPassword) {
      errorMessage = 'All fields must be filled out.';
      formValid = false;
    } 

    // Validate mobile number only if form is still valid
    if (formValid && !/^\d{10}$/.test(mobileNumber)) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      formValid = false;
    } else {
      setMobileError('');
    }

    // Validate passwords only if form is still valid
    if (formValid && (password === '' || confirmPassword === '')) {
      setPasswordError('Password and confirm password fields cannot be empty.');
      formValid = false;
    } else if (formValid && password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      formValid = false;
    } else {
      setPasswordError('');
    }

    if (!agreedT_C) {
      errorMessage = 'You must agree to the Terms & Conditions.';
      formValid = false;
    }

    if (formValid) {
      try {
        const response = await axios.post('http://localhost:5000/api/signup', {
          fullName,
          countryCode,
          mobileNumber,
          email,
          password
        });
        alert('Signup successful! Login Now');
        setIsSignedUp(true);
      } catch (error) {
        setFormError('Failed to sign up user.');
      }
    } else {
      setFormError(errorMessage);
    }
  };

  if (isSignedUp) {
    return <LogIn />;
  }

  return (
    <form onSubmit={handleSubmit} className="designForm">
      <h2 style={{ marginTop: '5px', textAlign: "center", color: 'blue' }}>SignUp</h2>
      <div className="form-group">
        <label htmlFor="inputName" className="custom-label">Enter Your Full Name</label>
        <input
          type="text"
          className="form-control custom-input"
          id="inputName"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputCountryCode" className="custom-label">Country Code</label>
        <select
          className="form-control custom-select"
          id="inputCountryCode"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+977">+977 (Nepal)</option>
          <option value="+92">+92 (Pakistan)</option>
          <option value="+880">+880 (Bangladesh)</option>
          {/* Add more country codes as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="inputMobileNumber" className="custom-label">Enter Mobile Number</label>
        <input
          type="tel"
          className="form-control custom-input"
          id="inputMobileNumber"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          pattern="[0-9]{10}"
          required
        />
        {mobileError && <small className="form-error">{mobileError}</small>}
      </div>
      <div className="form-group">
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
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="custom-label">Create Password</label>
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
      <div className="form-group">
        <label htmlFor="exampleInputConfirmPassword" className="custom-label">Confirm Password</label>
        <input
          type="password"
          className="form-control custom-input"
          id="exampleInputConfirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {passwordError && <small className="form-error">{passwordError}</small>}
      </div>
      <div className="form-check customCheck">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={agreedT_C}
          onChange={(e) => setAgreedT_C(e.target.checked)}
          required
        />
      <label className="form-check-label" htmlFor="exampleCheck1">
          I agree to the <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </label>
      </div>
      {formError && <div className="form-error">{formError}</div>}
        <button type="submit" className="btn btn-primary customBtn">Submit</button>
      {formError && <div className="form-error">{formError}</div>}
      <div className="signup-link">
        <Link to="/login">Already A Member !! LogIn Now</Link>
      </div>
    </form>
  );
}

export default SignUp;

import React, { useState } from 'react';
import Register from '../assets/images/signup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Loginsignup.css'
const Signup = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    setCredential({
      name: '',
      email: '',
      password: '',
      cpassword: '',
    });

    console.log('Response:', json);
    if (json) {
      localStorage.setItem('token', json.authToken);
      navigate('/login');
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src={Register} alt="Signup" />
        </div>
        <div className="signup-form">
          <h4>Sign up to visit the website</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={credential.name}
                onChange={onChange}
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={credential.email}
                onChange={onChange}
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={credential.password}
                onChange={onChange}
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                value={credential.cpassword}
                onChange={onChange}
                id="cpassword"
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

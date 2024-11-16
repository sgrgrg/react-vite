import React, { useState } from 'react';
import Register from '../assets/images/signup.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credential;
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    setCredential({
      email: '',
      password: '',
    });

    console.log('Response:', json);
    if (json) {
      localStorage.setItem('token', json.authToken);
      navigate('/');
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <img src={Register} alt="Login" />
        </div>
        <div className="login-form">
          <h4>Login to visit the website</h4>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <p>
              Not registered? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

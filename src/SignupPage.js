import React, { useState } from 'react';
import './SignupPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);

    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ netId: username, password, confirmPassword }),
      });

      const result = await response.json();
      setIsSigningUp(false);

      if (response.ok) {
        toast.success('Signed up successfully', { position: "top-right" });
        setTimeout(() => {
          window.location.href = '/login'; // Controlled redirection after toast
        }, 3000); // Match the autoClose duration
      } else {
        toast.error(result.message, { position: "top-right" });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred during signup', { position: "top-right" });
      setIsSigningUp(false);
    }
  };

  return (
    <div className="signup-page">
      <main className="main">
        <header>
          <img
            className="main-logo"
            src="mainbanner.png"
            alt="California State University, East Bay"
          />
        </header>

        <section>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">NetID</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <div className="checkbox-container">
              <input type="checkbox" name="donotcache" value="1" id="donotcache" />
              <label htmlFor="donotcache">Don't Remember Login</label>
            </div>

            <div className="grid">
              <div className="grid-item">
                <button type="submit" disabled={isSigningUp}>
                  {isSigningUp ? 'Signing up, please wait...' : 'Sign Up'}
                </button>
              </div>
            </div>
          </form>

          <ul>
            <li><a href="https://www.csueastbay.edu/netid">Forgot your password?</a></li>
            <li><a href="https://csueastbay.service-now.com/sp">Need Help?</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="cc">
          <p>California State University, East Bay</p>
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default SignupPage;

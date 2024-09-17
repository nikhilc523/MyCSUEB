import React, { useState } from 'react';
import './LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);

    try {
      const response = await fetch('https://mycsueb-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ netId: username, password }),
      });

      const result = await response.json();
      setIsLoggingIn(false);

      if (response.ok) {
        toast.success('Logged in successfully', { position: "top-right" });  // Show success toast
        // Redirect or handle successful login
      } else {
        toast.error(result.message, { position: "top-right" });  // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred during login', { position: "top-right" });  // Show error toast
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="login-page">
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

            <div className="checkbox-container">
              <input type="checkbox" name="donotcache" value="1" id="donotcache" />
              <label htmlFor="donotcache">Don't Remember Login</label>
            </div>

            <div className="grid">
              <div className="grid-item">
                <button type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in, please wait...' : 'Login'}
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

      {/* Toast container for displaying notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default LoginPage;

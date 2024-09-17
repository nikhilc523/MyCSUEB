import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
const signInIcon = process.env.PUBLIC_URL + '/login.png';
const SignIn = () => {
  const navigate = useNavigate(); // Updated hook for navigation

  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the new login page
  };

  return (
    <div className="sign-in">
  <h2>
    <img src={signInIcon} alt="Sign In Icon" className="icons" />
    Sign In
  </h2>
  <div className="sign-in-buttons">
    <button className="sign-in-button" onClick={handleSignInClick}>
      SIGN IN
    </button>
    <button className="sign-up-button" onClick={() => navigate('/signup')}>
      SIGN UP
    </button>
  </div>
  <div>
    <a href="#" className="manage-netid">Manage my NetID</a>
    <p>Faculty / Staff - Looking for your HR, Timesheet, etc. information? Use <a href="#">MyHR!</a></p>
  </div>
</div>

  );
};

export default SignIn;

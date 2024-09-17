import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section with MYCSUEB image and MyHelp link */}
      <div className="navbar-left">
        <img 
          src="mycsueb.png"  /* Replace with actual MYCSUEB logo PNG file */
          alt="MYCSUEB"
          className="mycsueb-logo"
        />
        <a href="#help" className="myhelp-link">MyHelp</a>
      </div>

      {/* Right section with Cal State East Bay Logo */}
      <div className="navbar-right">
        <img
          src="csuebblack.png"  /* Replace with actual East Bay logo file */
          alt="Cal State East Bay"
          className="east-bay-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;

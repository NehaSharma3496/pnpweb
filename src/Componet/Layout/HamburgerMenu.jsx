import React, { useState } from 'react';
// import './HamburgerMenu.css'; // Import the CSS file

const HamburgerMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <label htmlFor="navi-toggle" onClick={handleClick} className={`menu-label ${click ? 'active' : ''}`}>
        <span className="icon">&nbsp;</span>
      </label>
      <div className={`nav-background ${click ? 'active' : ''}`}>&nbsp;</div>

      <nav className={`navigation ${click ? 'active' : ''}`}>
        <ul className="list">
          <li>
            <a onClick={handleClick} href="/" className="item-link">
              Home
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/about" className="item-link">
              
Our Works
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/portfolio" className="item-link">
            Services
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/blog" className="item-link">
            Buy Own Domain
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/contact" className="item-link">
            Career
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/contact" className="item-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

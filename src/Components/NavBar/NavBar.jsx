import React from 'react';
import './NavBar.css';

const NavBar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">    
      <ul className="navbar-nav">
        <li
          onClick={() => handleScroll('home')}
          className="nav-item"
        >
          <div className="planet home"></div>
          <span className="planet-label">Home</span>
        </li>
        <li
          onClick={() => handleScroll('projects')}
          className="nav-item"
        >
          <div className="planet projects"></div>
          <span className="planet-label">Projects</span>
        </li>
        <li
          onClick={() => handleScroll('skills')}
          className="nav-item"
        >
          <div className="planet skills"></div>
          <span className="planet-label">Skills</span>
        </li>
      </ul>
      <div className="connect">
        <button onClick={() => handleScroll('connect')} className="connect-btn">Let’s Connect</button>
      </div>
    </div>
  );
};

export default NavBar;

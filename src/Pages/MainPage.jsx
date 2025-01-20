import React from 'react';
import backgroundImage from '../Components/Assets/Background_image.png';
import rocketImage from '../Components/Assets/Rocket.png'; 
import './MainPage.css';
import NavBar from '../Components/NavBar/NavBar';
import Banner from '../Components/Banner/Banner';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';

const MainPage = () => {
  return (
    <div className="main-page" style={{ '--bg-image': `url(${backgroundImage})` }}>
      <div className="shooting-stars-container">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="shooting-star"
            style={{
              top: `${Math.random() * 100}vh`, 
              left: `${Math.random() * 100}vw`, 
              animationDelay: `${Math.random() * 5}s`, 
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
        
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="rocket"
            style={{
              top: `${Math.random() * 100}vh`, 
              left: `${Math.random() * 100}vw`, 
              animationDelay: `${Math.random() * 3}s`, 
              animationDuration: `${2 + Math.random() * 3}s`, 
            }}
          >
            <img src={rocketImage} alt="Rocket" />
          </div>
        ))}
      </div>

      <NavBar />
      <section id="home">
        <Banner />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="connect">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;

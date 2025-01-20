import React, { useRef, useEffect, useState } from "react";
import "./Skills.css";
import js_icon from "../Assets/java-script.png";
import react_icon from "../Assets/React.png";
import css_icon from "../Assets/css.png";
import mysql_icon from "../Assets/mysql.png";
import html_icon from "../Assets/html.png";
import c_icon from "../Assets/C_lang.png";
import python_icon from "../Assets/Python.png";
import excel_icon from "../Assets/Excel.png";
import powerpoint_icon from "../Assets/powerpoint.png";
import word_icon from "../Assets/word.png";

const skillsData = [
  { name: "JavaScript", x: 30, y: 30, image: js_icon, details: "A versatile programming language for the web." },
  { name: "React", x: 20, y: 40, image: react_icon, details: "A library for building user interfaces." },
  { name: "CSS", x: 40, y: 50, image: css_icon, details: "Styling language for creating beautiful web pages." },
  { name: "MySQL", x: 35, y: 60, image: mysql_icon, details: "A popular open-source relational database management system." },
  { name: "HTML", x: 10, y: 50, image: html_icon, details: "Markup language for structuring web content." },
  { name: "C", x: 55, y: 20, image: c_icon, details: "A low-level programming language." },
  { name: "Python", x: 60, y: 10, image: python_icon, details: "A powerful, easy-to-learn programming language." },
  { name: "Ms Excel", x: 50, y: 40, image: excel_icon, details: "A spreadsheet program used to save and analyze numerical data." },
  { name: "Ms PowerPoint", x: 70, y: 30, image: powerpoint_icon, details: "A presentation software used to create visually appealing presentations." },
  { name: "Ms Word", x: 40, y: 10, image: word_icon, details: "A word processing software used to create visually appealing documents." },
];

const Skills = () => {
  const canvasRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    const centerX = canvas.width / 4; 
    const centerY = canvas.height / 4;

    const drawConstellation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 1;
      for (let i = 0; i < skillsData.length - 1; i++) {
        const skill1 = skillsData[i];
        const skill2 = skillsData[i + 1];
        ctx.moveTo(centerX + skill1.x * 10, centerY + skill1.y * 10);
        ctx.lineTo(centerX + skill2.x * 10, centerY + skill2.y * 10);
      }
      ctx.stroke();

     
      skillsData.forEach((skill) => {
        const x = centerX + skill.x * 10;
        const y = centerY + skill.y * 10;

        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(255, 255, 0, 0.8)";
        ctx.fill();

        
        ctx.fillStyle = "white";
        ctx.shadowBlur = 0;
        ctx.font = "14px Poppins, sans-serif";
        ctx.fillText(skill.name, x + 12, y - 10);
      });
    };

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      
      skillsData.forEach((skill) => {
        const x = centerX + skill.x * 10;
        const y = centerY + skill.y * 10;
        const distance = Math.hypot(mouseX - x, mouseY - y);

        if (distance < 12) { 
          setSelectedSkill(skill);
          setClickedPosition({ x: e.clientX, y: e.clientY });
        }
      });
      
    };

    canvas.addEventListener("click", handleCanvasClick);
    drawConstellation();

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills Constellation</h1>
      <canvas ref={canvasRef} className="skills-canvas"></canvas>
      {selectedSkill && (
        <div
          className="skill-details"
          style={{
            top: clickedPosition.y + 20,
            left: clickedPosition.x + 20,
          }}
        >
          <h2>{selectedSkill.name} <img src={selectedSkill.image} alt={selectedSkill.name} className="skills-image" /> </h2>
          <p>{selectedSkill.details}</p>
        </div>
      )}
    </div>
  );
};

export default Skills;


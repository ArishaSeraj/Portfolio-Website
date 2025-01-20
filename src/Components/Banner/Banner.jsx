import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import headerImg from '../Assets/Banner_logo.png';
import ln_icon from '../Assets/linkedin.png';
import github_icon from '../Assets/github.png';
import insta_icon from '../Assets/instagram.png';
import './Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Frontend Developer", "Backend Developer", "Web Developer"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                 <div className="text-content"> 
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Arisha Seraj`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Frontend Developer", "Backend Developer", "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Currently a first-year Bachelor of Computer Applications (BCA) student with a keen focus on web development,
                  aiming to build a strong foundation in both front-end and back-end technologies.
                  <br />
                  Skills and Learning Goals:
                  <br />
                  Proficient in Python, MySQL, HTML, CSS, and JavaScript, with a strong foundation in web development and scripting. 
                  Actively developing skills in C, C++, and Java, focusing on enhancing server-side capabilities and exploring broader programming paradigms.
                  <br />
                  I am to eager to bring my skills to an internship to help me learn and grow in a dynamic, real-world environment.
                  </p>
                  <div className="social-icons">
                    <img src={ln_icon} alt="" />
                    <img src={github_icon} alt="" />
                    <img src={insta_icon} alt="" />
                  </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="image-container">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" className="header-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;


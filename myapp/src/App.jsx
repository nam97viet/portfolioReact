import React from "react";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App-container">
      <Header />
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <h1>Welcome to My Porfolio</h1>
                <p>
                  I’m Nathan Tran, a senior Computer Science major at the
                  University of Houston with a minor in Data Science. I love
                  turning ideas into intuitive web experiences and uncovering
                  insights hidden in data. Whether I’m building responsive
                  front-end interfaces or crunching numbers to power smarter
                  decisions, I thrive at the intersection of code, creativity,
                  and analytics—and I’m always looking for the next challenge
                  that lets me blend them all.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <img src="/Avatar.png" className="App-logo" alt="logo" />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="skills-container">
                  <div className="skills-grid">
                    <div className="skill-box">
                      <i className="devicon-html5-plain colored"></i>
                      <span>HTML</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-css3-plain colored"></i>
                      <span>CSS</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-javascript-plain colored"></i>
                      <span>JavaScript</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-cplusplus-plain colored"></i>
                      <span>C++</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-python-plain colored"></i>
                      <span>Python</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-github-original colored"></i>
                      <span>GitHub</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-figma-plain colored"></i>
                      <span>Figma</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-react-original colored"></i>
                      <span>ReactJS</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-nodejs-plain colored"></i>
                      <span>NodeJS</span>
                    </div>
                    <div className="skill-box">
                      <i className="devicon-bootstrap-plain colored"></i>
                      <span>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Col from "react-bootstrap/Col";

function Skills() {
  return (
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
  );
}

export default Skills;
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Container from "react-bootstrap/Container";
import CursorTrail from "./components/CursorTrail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Experience from './components/Experience';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App-container">
      <CursorTrail />
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
                <img 
                  src={process.env.PUBLIC_URL + '/images/Avatar.jpg'} 
                  className="App-logo" 
                  alt="Nathan Tran" 
                />
              </Col>
            </Row>
            <Row>
              <Skills />
            </Row>
            <Row>
              <Project />
            </Row>
            <Row>
              <Experience />
            </Row>
            <Row>
              <Connect />
            </Row>
          </Container>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;

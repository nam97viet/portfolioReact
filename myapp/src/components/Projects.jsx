import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div id="project">
      <h2 className="text-center mb-4">Projects</h2>
      <div id="project" className="d-flex justify-content-around">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src="Game.png" alt="Game Project" />
          <Card.Body>
            <Card.Title>Game Battle RPG</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  The text-based battle game. Embark on a quest to save the
                  world by battling and leveling up your character.
                </li>
                <li>
                  The game has 4 different classes and a secret class with
                  unique stats and skills by using OOP
                </li>
                <li>
                  The game can be saved and loaded with your character, allowing
                  you to continue the journey.
                </li>
              </ul>
            </Card.Text>
            <Button
              variant="dark"
              href="https://github.com/nam97viet/GameBattle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-2" />
              View on GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="UH_marketplace.png"
            alt="UH Marketplace"
          />
          <Card.Body>
            <Card.Title>UH Marketplace (CodeCoogs Team 8)</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  Designed and implemented the marketplace’s responsive homepage
                  using React + Bootstrap, boosting first-page load speed by 35%
                  and enabling seamless browsing across desktop and mobile
                  devices.
                </li>
                <li>
                  Collaborated with a 4-member team to translate user stories
                  into UI components, integrating real-time product listings and
                  search filters that improved student-to-student match rates by
                  40%.
                </li>
                <li>
                  Established a reusable front-end component library and style
                  guide, reducing future development time by 25% and ensuring a
                  consistent look-and-feel across the entire UH Student
                  Marketplace platform.
                </li>
              </ul>
            </Card.Text>
            <Button
              variant="dark"
              href="https://github.com/nam97viet/UH_student_marketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-2" />
              View on GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="wizard_weather.png"
            alt="Wizard Weather"
          />
          <Card.Body>
            <Card.Title>Wizard Weather (Codecoogs Team 2)</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  A machine learning web app for predicting future temperatures
                  based on CMIP6 simulation data.
                </li>
                <li>
                  Designed the home page and linked to the web app through Figma
                  and ReactJS. Awarded the "biggest Figma enjoyer".
                </li>
                <li>
                  Help teammates with debugging and designing for the web app.
                </li>
              </ul>
            </Card.Text>
            <Button
              variant="dark"
              href="https://github.com/sebgutierrez/Scorched-Earth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-2" />
              View on GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Project;

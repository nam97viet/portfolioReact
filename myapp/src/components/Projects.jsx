import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project() {
  return (
    <div id="project">
      <h2 className="text-center mb-4">PROJECTS</h2>
      <Container>
        <Row className="project-cards">
          <Card className="flex-row">
            <div className="card-img-container">
              <Card.Img src="Game.png" alt="Game Project" />
            </div>
            <Card.Body>
              <Card.Title>Game Battle RPG</Card.Title>
              <p className="tech-stack">C++, Object-Oriented Programming</p>
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

          <Card className="flex-row">
            <div className="card-img-container">
              <Card.Img src="UH_marketplace.png" alt="UH Marketplace" />
            </div>
            <Card.Body>
              <Card.Title>UH Marketplace (CodeCoogs Team 8)</Card.Title>
              <p className="tech-stack">React, Bootstrap, HTML/CSS, JavaScript</p>
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

          <Card className="flex-row">
            <div className="card-img-container">
              <Card.Img src="wizard_weather.png" alt="Wizard Weather" />
            </div>
            <Card.Body>
              <Card.Title>Wizard Weather (Codecoogs Team 2)</Card.Title>
              <p className="tech-stack">React, Figma, HTML/CSS, Javascript, Bootstrap</p>
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

          <Card className="flex-row">
            <div className="card-img-container">
              <Card.Img src="covid_card.png" alt="Covid-19 Analysis" />
            </div>
            <Card.Body>
              <Card.Title>Comprehensive Analysis and Predictive Modeling of Global COVID-19 Trends (Data Science Group Project)</Card.Title>
              <p className="tech-stack">Python, Jupyter / Google Colab</p>
              <Card.Text>
                <ul>
                  <li>
                    Engineered an end-to-end data pipeline that cleaned and explored a 1,034-row, 19-feature global COVID-19 dataset; produced trend dashboards that highlighted infection surges, hospitalization waves and ICU-capacity stress points.
                  </li>
                  <li>
                    Benchmarked Decision Tree, K-NN and SVM classifiers with 5-fold CV, tuning hyper-parameters to reach 72 % accuracy with K-NN and best overall precision/recall with an RBF-SVM model, then summarized findings in executive-ready visual reports. 
                  </li>
                  <li>
                    Applied DBSCAN clustering and an LSTM forecaster to segment 16 regional pandemic patterns (silhouette = 0.95) and predict next-day ICU demand with MAE ≈ 20 patients, supplying actionable insights for healthcare resource planning. 
                  </li>
                </ul>
              </Card.Text>
              <div className="d-flex gap-2">
                <Button
                  variant="dark"
                  href="https://github.com/sebgutierrez/Scorched-Earth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="me-2" />
                  View on GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://docs.google.com/document/d/1eTgDmmiCzSPIHoD6R1-qzPfrQbjJtmkyzDq0Cn8khlw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="me-2" />
                  View Report
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="flex-row">
            <div className="card-img-container">
              <Card.Img src="stock_price.png" alt="Stock Price Prediction" />
            </div>
            <Card.Body>
              <Card.Title>Stock Price Prediction (AI/ML Group Project)</Card.Title>
              <p className="tech-stack">Python, Jupyter / Google Colab</p>
              <Card.Text>
                <ul>
                  <li>
                    Built an end-to-end stock-price forecasting pipeline comparing stacked LSTM and Random Forest models; tuned the LSTM to a test RMSE ≈ 0.75 and MAE ≈ 0.35 on AMD daily closes—32 % more accurate than the tree-based baseline.
                  </li>
                  <li>
                    Designed and executed hyper-parameter ablation (sequence length, hidden units, learning rate, batch size, #trees, tree depth) that cut training time 3× while preserving accuracy, and distilled findings into a 20-page technical report. 
                  </li>
                  <li>
                    Automated data ingestion, preprocessing, training, and visualization in Jupyter; authored the LSTM sections of the comparative study and produced publication-quality plots for executive review.
                  </li>
                </ul>
              </Card.Text>
              <div className="d-flex gap-2">
                <Button
                  variant="dark"
                  href="https://github.com/nam97viet/COSC4368_GroupProject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="me-2" />
                  View on GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1aF-luWcgQEo5r82y4jtrBXibW-IdeTe-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="me-2" />
                  View Report
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Project;

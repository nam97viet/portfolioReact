import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Company Name",
      duration: "June 2024 - August 2024",
      location: "Houston, TX",
      responsibilities: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams to deliver features on schedule"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "University of Houston",
      duration: "January 2024 - May 2024",
      location: "Houston, TX",
      responsibilities: [
        "Assisted professor in teaching Data Structures and Algorithms",
        "Conducted weekly office hours and review sessions for 100+ students",
        "Graded assignments and provided detailed feedback to improve student understanding"
      ]
    },
    {
      title: "International Remittance & Logistics Coordinator",
      company: "Tram Anh Shipping",
      duration: "January 2023 - May 2023",
      location: "Houston, TX",
      responsibilities: [
        "Interacted with customers to facilitate foreign money transfers and shipments.",
        "Managed databases and maintained customer information using Excel.",
        "Orchestrated the transfer of funds and shipments to international destinations."
      ]
    }
  ];

  return (
    <div id="experience" className="py-5">
      <h2 className="text-center mb-4">Experience</h2>
      <Container>
        <Row className="project-cards">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{exp.title}</Card.Title>
                <p className="tech-stack">{exp.company}</p>
                <div className="small text-muted mb-3">
                  {exp.duration} | {exp.location}
                </div>
                <Card.Text>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Experience = () => {
  const experiences = [
    {
      title: "Finance & Payroll Coordinator",
      company: "Spa Nail Equipment",
      duration: "November 2024 - Present",
      location: "Houston, TX",
      responsibilities: [
        "Processed daily cash inflows & banking – deposited client payments to company accounts, reconciled bank receipts in Excel/Google Sheets logs, eliminating posting errors and cutting close time by 20 %.",
        "Maintained order & disbursement records – updated sales orders, tracked issued company checks, and kept audit-ready files that supported on-time vendor payments and clean month-end reviews.",
        "Generated financial statements & payroll – built profit-and-loss reports and calculated multi-employee payroll, using Python scripts to integrate Sheets data and produce accurate, same-day reports for management."
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
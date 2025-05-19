import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Connect = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_rz5ih1d',
      'template_8o0aruo',
      form.current,  // Send the form reference directly
      '4MpixvPP3gacHOgKD'
    )
      .then((result) => {
        setAlertVariant('success');
        setAlertMessage('Thank you for your message! I will get back to you soon.');
        setShowAlert(true);
        form.current.reset();
      })
      .catch((error) => {
        setAlertVariant('danger');
        setAlertMessage('Failed to send message. Please try again or contact me directly.');
        setShowAlert(true);
        console.error('EmailJS Error:', error);  // Add error logging
      });
  };

  return (
    <div id="connect" className="py-5 connect-section">
      <Container>
        <h2 className="text-center mb-4">Connect With Me</h2>
        <div className="form-wrapper">
          {showAlert && (
            <Alert 
              variant={alertVariant} 
              onClose={() => setShowAlert(false)} 
              dismissible
              className="alert-custom"
            >
              {alertMessage}
            </Alert>
          )}
          <Form ref={form} onSubmit={handleSubmit} className="connect-form">
            <Form.Group className="mb-4">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-label">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                required
                rows={4}
                placeholder="Your message"
                className="form-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Connect;
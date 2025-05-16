import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mx-4">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="mailto:nathantran2208@gmail.com"
          className="text-body-secondary text-decoration-none me-3"
          aria-label="Email"
        >
          <FaEnvelope className="me-2" />
          Contact: nathantran2208@gmail.com
        </a>
      </div>
      <div className="col-md-4 d-flex align-items-center justify-content-end">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Nathan Tran
        </span>
      </div>
    </footer>
  );
}

export default Footer;
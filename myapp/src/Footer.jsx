import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          aria-label="Bootstrap"
        >
          <svg className="bi" width="30" height="24" aria-hidden="true"></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Nathan Tran
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3 me-3">
          <a className="text-body-secondary" href="#" aria-label="GitHub">
            <FaGithub size={45} />
          </a>
        </li>
        <li className="ms-3 me-3">
          <a className="text-body-secondary" href="#" aria-label="LinkedIn">
            <FaLinkedin size={45} />
          </a>
        </li>

        <li className="ms-3 me-3">
          <a className="text-body-secondary" href="#" aria-label="Facebook">
            <FaFacebook size={45} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

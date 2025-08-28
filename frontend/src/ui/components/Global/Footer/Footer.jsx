import React from "react";
import logo from "./../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Autorex" />
          </Link>
          <p>Professional auto repair & services. Reliable and fast.</p>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">
            <FaHome className="footer-icon" /> Home
          </Link>
          <Link to="/about" className="footer-link">
            <FaInfoCircle className="footer-icon" /> About Us
          </Link>
          <Link to="/services" className="footer-link">
            <FaTools className="footer-icon" /> Services
          </Link>
          <Link to="/contact" className="footer-link">
            <FaEnvelope className="footer-icon" /> Contact
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Autorex. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

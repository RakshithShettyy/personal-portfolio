import React from "react";
// import Navbar from "../Components/Navbar";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
              <div className="footer-section">
                <h3>Contact</h3>
                <p>
                  For any questions, please mail me at{" "}
                  <a href="mailto:rakshithshetty227@gmail.com">
                    rakshithshetty227@gmail.com
                  </a>
                </p>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://github.com/RakshithShettyy"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+919535675192"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaPhone /> +91 9535675192
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rakshith-shetty-pingme/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedin /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

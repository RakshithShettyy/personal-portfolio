import React from "react";
import Navbar from "../Components/Navbar";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-heading">
            <p>For any questions, please mail me at</p>
            <a href="mailto:rakshithshetty227@gmail.com">
              <h2>rakshithshetty227@gmail.com</h2>
            </a>
          </div>
        </div>

        <div className="social-links">
          <ul>
            <li className="link">
              <a
                href="https://github.com/RakshithShettyy"
                target="_blank"
                rel="noopener noreferrer">
                <span className="link-icon">
                  <FaGithub />
                </span>
                GitHub
              </a>
            </li>
            <li className="link">
              <a
                href="tel:+919535675192"
                target="_blank"
                rel="noopener noreferrer">
                <span className="link-icon">
                  <FaPhone />
                </span>
                +91 9535675192
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/rakshith-shetty-pingme/"
                target="_blank"
                rel="noopener noreferrer">
                <span className="link-icon">
                  <FaLinkedin />
                </span>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;

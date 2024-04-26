import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleScroll = (elm) => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link to="/">{/* <h2>Rakshith</h2> */}</Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}>
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                <li>
                  <Link to="/#home" onClick={handleScroll}>
                    HOME
                  </Link>
                </li>
                <li>
                  <a href="#about" onClick={handleScroll}>
                    ABOUT
                  </a>
                </li>
                {/* <li>
                  <Link o="/#tech-stacks" onClick={handleScroll}>
                    Tech Stack
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/#project" onClick={handleScroll}>
                    Projects
                  </Link>
                </li> */}
                <li>
                  <Link to="/contact" onClick={handleScroll}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;

import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container hv-100 text-left about-container">
        <div className="intro">
          <div className="titile-about">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="title-about">
            <p>
              As a dedicated frontend developer, I'm eager to expand my skills
              into full-stack development. I utilize my expertise to enhance
              user experiences and application functionalities. With a
              background in Integrated MCA, I strive to create impactful
              end-to-end web solutions.
            </p>
          </div>
        </div>
        <div className="work-experience">
          <div className="work-heading">
            <h2 className="heading">Work Experience</h2>
          </div>
          <div class="list-group">
            <Link
              to="/"
              class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Frontend Developer - ReactJs</h5>
                <small>
                  <span class="badge bg-success">Fulltime</span>
                </small>
              </div>
              {/* <p class="mb-1">Intuitive Apps Inc</p> */}
              <div className="w-100 d-flex justify-content-between">
                <div className="card-title">
                  <small>Intuitive Apps</small>
                  <small>Remote</small>
                </div>

                <small>June-2023 - Current</small>
              </div>
            </Link>
          </div>
        </div>
        <div className="education">
          <div className="education-heading">
            <h2 className="heading">Educaiton</h2>
          </div>
          <div class="list-group">
            <a
              href="/"
              class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Integrated MCA</h5>
                <small>
                  {/* <span class="badge bg-success">Fulltime</span> */}
                </small>
              </div>
              {/* <p class="mb-1">Intuitive Apps Inc</p> */}
              <div className="w-100 d-flex justify-content-between">
                <div className="w-50 d-flex justify-content-between">
                  <small>Amrita school of arts and sciences, Mysore</small>
                </div>

                <small>Aug-2018 - Aug-2023</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

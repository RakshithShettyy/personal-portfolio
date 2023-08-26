import React from "react";
import Navbar from "../Components/Navbar";
import { GoLocation } from "react-icons/go";

const About = () => {
  console.log("rendering");
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="inner-container my-5">
            <h2>About me</h2>
            <div>
              <p>
                Hi, I'm Rakshith. I pursued Integrated MCA at Amrita School of
                Arts and Science in Mysore and am deeply passionate about web
                development. Beyond the screen, I'm a dedicated freelance
                photographer, always eager to capture the next great moment.
              </p>
            </div>
          </div>

          <div className="inner-container my-3">
            <h2>Word Experience</h2>
            <div>
              <div className="d-flex flex-row justify-content-between">
                <h5>Frontend Developer Intern</h5>
                <button className="about-btn">Intern</button>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Intuitive Apps PVT LTD</p>
                <p>
                  <GoLocation />
                  Remote{" "}
                </p>
                <p>June 01 - Current</p>
              </div>
            </div>
          </div>
          <div className="inner-container my-5">
            <h2>Education</h2>
            <div>
              <div className="d-flex flex-row justify-content-between">
                <h5>Integrated MCA</h5>
                <button className="about-btn">FullTime</button>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Amrita School of Computing</p>
                <p>
                  <GoLocation />
                  Mysore{" "}
                </p>
                <p>June 2018 - July 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  title,
  description,
  stacks,
  imgSrc,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="col d-flex justify-content-center m-3">
      <div
        className="card bg-dark text-white"
        style={{ width: "18rem", height: "25rem" }}>
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="fw-light">Tech Stacks : {stacks}</p>
        </div>
        <div className="card-body d-flex">
          <div className="me-auto links">
            <AiOutlineLink />
            <a href={liveLink} className="text-white">
              Live Preview
            </a>
          </div>
          <div className="links">
            <BsGithub />
            <a href={codeLink} className="text-white">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

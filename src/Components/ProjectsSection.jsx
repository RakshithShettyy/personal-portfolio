import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pixel Images",
      description:
        "This is a UI of Landing page for my photography page which I designed using pure html and css only",
      stacks: "HTML5,CSS,Javascript",
      imgSrc: "/images/pixel.jpg",
      liveLink: "/",
      codeLink: "/",
    },
    {
      title: "Landing page",
      description: "A Dark themed webpage with about us and contact section",
      stacks: "HTML5,CSS,Javascript",
      imgSrc: "/images/landing-page.png",
      liveLink: "/",
      codeLink: "/",
    },
    {
      title: "Personal website",
      description:
        "This website was actually built when I just started learning web development",
      stacks: "HTML5,CSS,Javascript",
      imgSrc: "/images/my-site-landing.png",
      liveLink: "https://frolicking-creponne-9ed317.netlify.app",
      codeLink:
        "https://github.com/RakshithShettyy/RakshithShetty-personal-site",
    },
    {
      title: "Personal website",
      description:
        "This website was actually built when I just started learning web development",
      stacks: "HTML5,CSS,Javascript",
      imgSrc: "/images/my-site-landing.png",
      liveLink: "https://frolicking-creponne-9ed317.netlify.app",
      codeLink:
        "https://github.com/RakshithShettyy/RakshithShetty-personal-site",
    },
  ];

  return (
    <div className="projects-section">
      <div className="text text-center">
        <h1>Projects</h1>
        <p>Things I've built so far</p>
      </div>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-sm-4">
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              imgSrc={project.imgSrc}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

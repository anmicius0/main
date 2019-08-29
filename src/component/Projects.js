import React, { useRef, useState } from "react";
import arrow from "../image/arrow.png";

const Projects = props => {
  const [classList, setClassList] = useState(["container limited"]);
  const projects = props.projects;

  const moreFade = useRef(null);

  const unlimited = () => {
    setClassList(["container"]);
    moreFade.current.style.display = "none";
  };

  return (
    <>
      <div className={"section"}>
        <div className={classList}>
          <h2>Projects</h2>
          <div className={"columns is-multiline is-centered projects"}>
            {projects.map(project => (
              <a className={"column"} href={project.link}>
                <h3>{project.name}</h3>
                <button className={"button is-primary is-outlined"}>Go</button>
              </a>
            ))}
          </div>
          <div
            className={"more-fade"}
            onClick={() => unlimited()}
            ref={moreFade}
          >
            <div className={"more-button"}>
              <img src={arrow} className={"arrow"}></img>
              <span className={"more"}>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

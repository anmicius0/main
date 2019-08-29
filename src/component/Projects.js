import React, { useRef, useState, useEffect } from "react";
import arrow from "../image/arrow.png";

const Projects = props => {
  const [classList, setClassList] = useState(["container limited"]);
  const projects = props.projects;

  const moreFade = useRef(null);

  // expand the projects list, hide more-fade
  const unlimited = () => {
    setClassList(["container"]);
    moreFade.current.style.display = "none";
  };

  // If there is no more than 5 projects, than call unlimited()
  useEffect(() => {
    if (projects.length < 5) {
      unlimited();
    }
  }, []);

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
              <img src={arrow} className={"arrow"} alt="more"></img>
              <span className={"more"}>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

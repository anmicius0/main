import React, { useRef, useState } from "react";
import arrow from "../image/arrow.png";

const Projects = () => {
  const [classList, setClassList] = useState(["container limited"]);
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
            {[...Array(10).keys()].map(num => (
              <div className={"column"}>
                <h3>Nostrud excepteur ea culpa deserunt .</h3>
                <button className={"button is-primary is-outlined"}>Go</button>
              </div>
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

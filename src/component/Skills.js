import React from "react";

const Skills = props => {
  const skills = props.skills;

  return (
    <>
      <div className={"section"}>
        <div className={"container skills"}>
          <h2>Skills</h2>
          <div className={"columns is-mutiline"}>
            {skills.map(skill => (
              <a href={skill.link} className={"column"}>
                <span className={"icon"}>
                  <i className={skill.icon}></i>
                </span>
                <br />
                <h3>{skill.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

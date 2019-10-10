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
              <div className={"column"}>
                <span className={"icon"}>
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                </span>
                <br />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

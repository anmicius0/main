import React from "react";

const About = () => {
  return (
    <>
      <div className={"section"}>
        <div className={"container about"}>
          <h2>
            About <br />
            <span>ANMICIUS</span>
          </h2>
          <p>
            Et in ea sint labore non nulla ut anim ad labore. Amet laborum est
            aute voluptate. Irure irure dolore qui cillum voluptate velit ipsum
            qui pariatur labore reprehenderit enim. Et elit commodo pariatur
            dolor Lorem. Commodo irure ut pariatur adipisicing incididunt culpa
            id cillum mollit.
          </p>

          <div className={"columns is-multiline"}>
            <a href="#" className={"column button is-medium"}>
              <span className={"icon"}>
                <i className={"fab fa-github"}></i>
              </span>
              <span>Github</span>
            </a>
            <a href="#" className={"column button is-medium"}>
              <span className={"icon"}>
                <i className={"fab fa-github"}></i>
              </span>
              <span>Github</span>
            </a>
            <a href="#" className={"column button is-medium"}>
              <span className={"icon"}>
                <i className={"fab fa-github"}></i>
              </span>
              <span>Github</span>
            </a>
            <a href="#" className={"column button is-medium"}>
              <span className={"icon"}>
                <i className={"fab fa-github"}></i>
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

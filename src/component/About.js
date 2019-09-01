import React from "react";

const About = props => {
  const contacts = props.contacts;

  return (
    <>
      <div className={"section"}>
        <div className={"container"} id="about">
          <h2>
            About <br />
            <span>ANMICIUS</span>
          </h2>
          <p>
            Anmicius, a word came from Latin. Meaning the mind full of the most
            crazy and inspiring idea. Naming this is wishing to make all the
            crazy stuff in my brain into the real projects. Use the tool that
            made by myself is an amazing experience. Hope you also enjoy the
            product I made. I you have any feedback, welcome to contact me.
          </p>

          <div className={"columns is-multiline is-mobile"}>
            {contacts.map(contact => (
              <a href={contact.link} className={"column button is-medium"}>
                <span className={"icon"}>
                  <i className={contact.icon}></i>
                </span>
                <span>{contact.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

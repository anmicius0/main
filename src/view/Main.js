import React from "react";

import Landing from "./component/Landing";
import Projects from "./component/Projects";
import Banner from "./component/Banner";
import Blog from "./component/Blog";
import About from "./component/About";
import Footer from "./component/Footer";

const Main = props => {
  return (
    <>
      <Landing />
      <Projects projects={props.projects} />
      <Banner />
      <Blog />
      <About contacts={props.contacts} />
      <Footer />
    </>
  );
};

export default Main;
import React from "react";
import "./App.css";
import "bulma";

import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import Projects from "./component/Projects";
import Banner from "./component/Banner";
import Blog from "./component/Blog";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Banner />
      <Blog />
      <About />
      <Footer />
    </>
  );
}

export default App;

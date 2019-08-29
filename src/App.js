import React, { useState } from "react";
import "./App.css";
import "bulma";

import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import Projects from "./component/Projects";
import Banner from "./component/Banner";
import Blog from "./component/Blog";
import Signup from "./component/Signup";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  const [projects, setProjects] = useState([
    { name: "Quizlet tool", link: "https://quizlet.anmicius.tk" },
    { name: "Stock simulator", link: "https://stock.anmicius.tk" }
  ]);

  const [contacts, setContacts] = useState([
    {
      name: "Github",
      link: "https://github.com/who-know-cg",
      icon: "fab fa-github"
    },
    { name: "Telegram", link: "https://t.me/cgallen", icon: "fab fa-telegram" },
    {
      name: "allenlin@disroot.org",
      link: "mailto:allenlin@disroot.org",
      icon: "fas fa-envelope"
    },
    { name: "PGP Key", link: "https://stpck.anmicius.tk", icon: "fas fa-key" }
  ]);

  return (
    <>
      <Navbar />
      <Landing />
      <Projects projects={projects} />
      <Banner />
      <Blog />
      <Signup />
      <About contacts={contacts} />
      <Footer />
    </>
  );
}

export default App;

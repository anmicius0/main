import React, { useState } from "react";
import "./App.css";
import "bulma";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Main from "./view/Main";

function App() {
  const [projects, setProjects] = useState([
    { name: "Quizlet tool", link: "https://quizlet.anmicius.tk" },
    { name: "Stock simulator", link: "https://stock.anmicius.tk" }
  ]);

  const [skills, setSkills] = useState([
    { name: "HTML", color: "#f16528", icon: "fab fa-html5 fa-3x" },
    { name: "CSS", color: "#35a9dc", icon: "fab fa-css3-alt fa-3x" },
    { name: "Javascript", color: "#f0db4e", icon: "fab fa-js fa-3x" },
    { name: "React.js", color: "#02d6fd", icon: "fab fa-react fa-3x" },
    { name: "Pythone", color: "#386e9c", icon: "fab fa-python fa-3x" }
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
    {
      name: "PGP Key",
      link: "https://telegra.ph/PGP-Key-for-allenlindisrootorg-09-19",
      icon: "fas fa-key"
    }
  ]);

  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Main projects={projects} skills={skills} contacts={contacts} />
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;

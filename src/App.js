import React, { useState } from "react";
import "./App.css";
import "bulma";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Main from "./view/Main";

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
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={location => (
            <Main projects={projects} contacts={contacts} location={location} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { ReactComponent as Logo } from "../image/logo.svg";

const Navbar = () => {
  return (
    <nav className={"navbar is-fixed-top"}>
      <div className={"navbar-brand"}>
        <a href="#" className={"navbar-item"}>
          <Logo id="Logo" />
        </a>

        <div className={"navbar-item login"}>
          <a href="#">Log in</a>
        </div>

        <div className={"navbar-item signup"}>
          <a href="#" className={"button is-primary"}>
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

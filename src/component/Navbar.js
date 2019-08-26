import React from "react";
import { ReactComponent as Logo } from "../image/logo.svg";

const Navbar = () => {
  return (
    <nav className={"navbar is-fixed-top"}>
      <div className={"navbar-brand"}>
        <a href="#" className={"navbar-item"}>
          <Logo id="Logo" />
        </a>

        {/* hamburger icon */}
        <a
          role="button"
          className={"navbar-burger burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={"navbar-menu"}>
        <div className={"navbar-end"}>
          <div className={"navbar-item"}>
            <a href="#">Log in</a>
          </div>
          <div className={"navbar-item"}>
            <a href="#" className={"button is-primary"}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

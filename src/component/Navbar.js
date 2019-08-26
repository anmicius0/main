import React from "react";

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <div className={"navbar-brand"}>
        <a href="#">{/* logo */}</a>

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
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

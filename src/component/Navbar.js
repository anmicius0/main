import React, { useRef } from "react";
import { ReactComponent as Logo } from "../image/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = useRef(null);

  var toggleMenu = () => {
    menu.current.classList.toggle("is-active");
  };

  return (
    <nav className={"navbar is-fixed-top"}>
      <div className={"navbar-brand"}>
        <Link to="/" className={"navbar-item"}>
          <Logo id="Logo" />
        </Link>
        <div
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          id="hamburger"
          href="#"
          onClick={() => toggleMenu()}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

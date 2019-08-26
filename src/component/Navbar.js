import React, { useRef } from "react";
import { ReactComponent as Logo } from "../image/logo.svg";

const Navbar = () => {
  const menu = useRef(null);

  var toggleMenu = () => {
    menu.current.classList.toggle("is-active");
  };

  return (
    <nav className={"navbar is-fixed-top"}>
      <div className={"navbar-brand"}>
        <a href="#" className={"navbar-item"}>
          <Logo id="Logo" />
        </a>
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

      <div className={"navbar-menu"} ref={menu}>
        <div className={"navbar-end"}>
          <div className={"navbar-item login"} aria-label="login">
            <a href="#">Log in</a>
          </div>

          <div className={"navbar-item signup"} aria-label="signup">
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

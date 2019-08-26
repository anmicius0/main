import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../image/logo.svg";

const Navbar = () => {
  useEffect(() => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }, []);

  return (
    <nav className={"navbar is-fixed-top"}>
      <div className={"navbar-brand"}>
        <a href="#" className={"navbar-item"}>
          <Logo id="Logo" />
        </a>

        <div className={"navbar-item"}>
          <a href="#">Log in</a>
        </div>

        <div className={"navbar-item"}>
          <a href="#" className={"button is-primary"}>
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

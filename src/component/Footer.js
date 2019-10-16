import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      Made with &nbsp; <i class="far fa-heart"></i> &nbsp; by ANMICIUS. With
      support from: <Link to="https://buttercms.com">ButterCMS</Link>
    </div>
  );
};

export default Footer;

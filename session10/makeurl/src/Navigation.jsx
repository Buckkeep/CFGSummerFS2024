import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Nav Home</Link>
        </li>
        <li>
          <Link to="/about">Nav About</Link>
        </li>
        <li>
          <Link to="/contact">Nav Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

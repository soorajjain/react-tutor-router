import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Blogs"> Blogs </Link>
          </li>
          <li>
            <Link to="/Contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

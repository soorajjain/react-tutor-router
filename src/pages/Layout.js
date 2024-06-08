import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <nav>
        <ul className="flex space-x-5 justify-center">
          <li>
            <Link className="p-3 border border-blue-500 rounded-xl" to="/"> Home </Link>
          </li>
          <li>
            <Link className="p-3 border border-blue-500 rounded-xl" to="/Blogs"> Blogs </Link>
          </li>
          <li>
            <Link className="p-3 border border-blue-500 rounded-xl" to="/Contact"> Contact </Link>
          </li>
        </ul>
      </nav>

      <div>{props.children}</div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-20 border-b">
      <div className="flex justify-between">
        <div className="mx-16 px-20 py-6">
          <h1 className="text-2xl font-bold">
            <Link to="/">
              <span className="text-bu">Stay</span>cation.
            </Link>
          </h1>
        </div>
        <div className="mx-14 px-20 py-7 float-right">
          <nav>
            <ul className="flex font-sans font-semibold text-blue">
              <li className="mr-8 ">
                <Link to="/">Home</Link>{" "}
              </li>
              <li className="mr-8">
                <Link to="/browseby">Browse by</Link>
              </li>
              <li className="mr-8 ">
                <Link to = "/stories">Stories</Link></li>
              <li className="mr-8">
                <Link to="/agents">Agents</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

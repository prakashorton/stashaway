import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
          StashAway Frontend Hiring Challenge
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;

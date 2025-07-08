import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Link to your CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">My Project</div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-list" activeClassName="active">
              Shopping List
            </NavLink>
          </li>
          <li>
            <NavLink to="/render" activeClassName="active">
              Rendering
            </NavLink>
          </li>
          <li>
            <NavLink to="/context-app" activeClassName="active">
              Context App
            </NavLink>
          </li>
          <li>
            <NavLink to="/with-prop" activeClassName="active">
              With Prop
            </NavLink>
          </li>
          <li>
            <NavLink to="/with-props" activeClassName="active">
              With Props
            </NavLink>
          </li>
          <li>
            <NavLink to="/with-context-app" activeClassName="active">
              With Context App
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

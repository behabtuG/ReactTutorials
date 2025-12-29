import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Link to your CSS file

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
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
          <li>
            <NavLink
              to="/context-intermediate-Component"
              activeClassName="active"
            >
              Context intermediate Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/ChallengeApp" activeClassName="active">
              Challenge
            </NavLink>
          </li>
          <li>
            <NavLink to="/ManagingStateApp" activeClassName="active">
              Managing State
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

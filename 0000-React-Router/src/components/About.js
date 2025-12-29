// About Page Component
import React from "react";
import { Link, Outlet } from "react-router-dom";
const About = () => (
  <div>
    <h2>About Page</h2>
    <nav>
      <ul>
        <li>
          <Link to="team">Our Team</Link>
        </li>
        <li>
          <Link to="company">Our Company</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default About;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

// Home Page Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

// About Page Component
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

// Components for other pages
const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

const ReactRoutes = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/*Implementing Routes for respective Path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default ReactRoutes;

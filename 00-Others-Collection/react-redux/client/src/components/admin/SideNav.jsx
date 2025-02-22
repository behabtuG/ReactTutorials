import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdShoppingBasket,
  MdLocalShipping,
} from "react-icons/md";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-light border-end shadow-sm ${
        isCollapsed ? "col-1" : "col-md-3"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <button
        className="btn btn-light w-100 my-2"
        onClick={toggleCollapse}
        aria-label="☰"
      >
        {isCollapsed ? "☰" : " ☰"}
      </button>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="../page/dashboard" className="nav-link">
            <MdDashboard className="me-2" /> {!isCollapsed && "Dashboard"}
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/admin/users" className="nav-link">
            <MdPeople className="me-2" /> {!isCollapsed && "Users"}
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/admin/products" className="nav-link">
            <MdShoppingBasket className="me-2" /> {!isCollapsed && "Products"}
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/admin/orders" className="nav-link">
            <MdLocalShipping className="me-2" /> {!isCollapsed && "Orders"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

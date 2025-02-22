import React from "react";
import { useSelector } from "react-redux";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const AdminPanel = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("--admin panel--", user);
  return (
    <div className="container-fluid">
      <TopNav />
      <div className="row flex-nowrap">
        <SideNav />
        <div className="col px-4 py-1 content">
          <h1>Welcome, {user ? user.name : "!"}</h1>
          {/* Add your admin dashboard components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaPlusCircle,
  FaUserTie,
  FaUsers,
  FaUserPlus,
  FaTools,
  FaBars,
} from "react-icons/fa";

export default function AdminSidebar({ isOpen =true, toggleSidebar, setSidebarOpen }) {
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);
  return (
    <>
      
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "0",
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
        />
      )}

     
      <div
        className="admin-left-side"
        style={{
          position: "fixed",
          top: "61px",
          left: 0,
          height: "100vh",
          width: "250px",
          background: "#222b48",
          boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <div className="admin-menu p-3 d-flex justify-content-between align-items-center">
          <h2>Admin Menu</h2>
          <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
        </div>

        <ul className="list-group">
          <li
            className={`list-group-item ${
              location.pathname === "/admin" ? "active" : ""
            }`}
          >
            <Link to="/admin">
              <FaTachometerAlt className="me-2" />
              Dashboard
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/orders" ? "active" : ""
            }`}
          >
            <Link to="/admin/orders">
              <FaClipboardList className="me-2" />
              Orders
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/new-order" ? "active" : ""
            }`}
          >
            <Link to="/admin/new-order">
              <FaPlusCircle className="me-2" />
              New Order
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/add-employee" ? "active" : ""
            }`}
          >
            <Link to="/admin/add-employee">
              <FaUserTie className="me-2" />
              Add Employee
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/employees" ? "active" : ""
            }`}
          >
            <Link to="/admin/employees">
              <FaUsers className="me-2" />
              Employees
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/add-customers" ? "active" : ""
            }`}
          >
            <Link to="/admin/add-customers">
              <FaUserPlus className="me-2" />
              Add Customer
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/customers" ? "active" : ""
            }`}
          >
            <Link to="/admin/customers">
              <FaUsers className="me-2" />
              Customers
            </Link>
          </li>
          <li
            className={`list-group-item ${
              location.pathname === "/admin/services" ? "active" : ""
            }`}
          >
            <Link to="/admin/services">
              <FaTools className="me-2" />
              Services
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

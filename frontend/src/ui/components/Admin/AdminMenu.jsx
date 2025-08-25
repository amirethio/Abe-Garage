import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaPlusCircle,
  FaUserTie,
  FaUsers,
  FaUserPlus,
  FaTools,
} from "react-icons/fa";

function AdminMenu() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
    { name: "Orders", path: "/admin/orders", icon: <FaClipboardList /> },
    { name: "New Order", path: "/admin/new-order", icon: <FaPlusCircle /> },
    { name: "Add Employee", path: "/admin/add-employee", icon: <FaUserTie /> },
    { name: "Employee", path: "/admin/employees", icon: <FaUsers /> },
    {
      name: "Add Customer",
      path: "/admin/add-customers",
      icon: <FaUserPlus />,
    },
    { name: "Customers", path: "/admin/customers", icon: <FaUsers /> },
    { name: "Services", path: "/admin/services", icon: <FaTools /> },
  ];

  return (
    <div className="admin-left-side">
      {/* Top Header */}
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>

      {/* Navigation */}
      <ul className="list-group">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              className={`list-group-item d-flex align-items-center ${
                isActive ? "active" : ""
              }`}
            >
              <Link
                to={item.path}
                className="d-flex align-items-center text-decoration-none flex-grow-1"
              >
                <span className="me-2">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AdminMenu;

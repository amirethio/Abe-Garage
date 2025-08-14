import React from "react";
import { Link } from "react-router-dom";

function AdminMenu() {
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Orders", path: "/admin/orders" },
    { name: "New Order", path: "/admin/new-order" },
    { name: "Add Employee", path: "/admin/add-employee" },
    { name: "Employee", path: "/admin/employees" },
    { name: "Add Customer", path: "/admin/add-customer" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Services", path: "/admin/services" },
  ];

  return (
    <div className="admin-menu-container">
      <div className="navigation-menu">
        <p>ADMIN MENU</p>
      </div>
      <div className="navigation-bg no-border">
        <ul className="list-group">
          {menuItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <Link to={item.path} className="text-light">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;

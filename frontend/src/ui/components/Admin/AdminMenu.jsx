import React from "react";

function AdminMenu() {
  return (
    <>
      <div>
        <div className="navigation-menu">
          <p>ADMIN MENU</p>
        </div>
        <div className="navigation-bg no-border">
          <li className="list-group-item">
            <a href="#" className="text-light">
              Dashboard
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Orders
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              New order
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Add employee
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Employee
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Add customer
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Customers
            </a>
          </li>
          <li className="list-group-item">
            <a href="#" className="text-light">
              Services
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default AdminMenu;

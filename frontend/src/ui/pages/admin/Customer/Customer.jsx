import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import CustomerList from "../../../components/Admin/Customer/CustomerList";
import Customers from "../../../components/Admin/Customer/Customers";

function Customer() {
  return (
    <div className="row responsive-admin-page admin-page ">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0 bgw">
        <aside className="admin-sidebar sticky-menu">
          <AdminMenu />
        </aside>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0">
        <main className="admin-main">
          <div className="admin-content">
            <Customers />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customer;

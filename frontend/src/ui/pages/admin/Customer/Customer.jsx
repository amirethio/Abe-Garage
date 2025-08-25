import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import CustomerList from "../../../components/Admin/Customer/CustomerList";
import Customers from "../../../components/Admin/Customer/Customers";

function Customer() {
  return (
    <div className="row best-bg responsive-admin-page">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0">
        <AdminMenu />
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0">
        {/* <CustomerList/> */}
        <Customers/>
      </div>
    </div>
  );
}

export default Customer;

import React from "react";
// import AdminMenu from "../../../components/Admin/AdminMenu";
// import CustomerList from "../../../components/Admin/Customer/CustomerList";
import Customers from "../../../components/Admin/Customer/Customers";
import AdminLayout from "../../../components/Admin/AdminLayout";

function Customer() {
  return (
    <AdminLayout>
      <Customers/>
    </AdminLayout>
  );
}

export default Customer;

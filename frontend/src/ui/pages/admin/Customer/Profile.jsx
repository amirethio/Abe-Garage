import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import EditCustomerForm from "../../../components/Admin/Customer/EditCustomerForm";
import CustomerProfile from "../../../components/Admin/Customer/CustomerProfile";

function Profile() {
  return (
    <div className="row  responsive-admin-page">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0 best-bg">
        <AdminMenu />
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0">
        <CustomerProfile />
      </div>
    </div>
  );
}

export default Profile;

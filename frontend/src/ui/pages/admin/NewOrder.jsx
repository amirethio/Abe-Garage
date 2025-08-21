import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu";
import NewOrderForm from "../../components/Admin/NewOrderForm";
import ChooseCustomer from "../../components/Admin/ChooseCustomer";

function NewOrder() {
  return (
    <div className="row  responsive-admin-page">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0">
        <AdminMenu />
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0 ">
        <ChooseCustomer/>
      </div>
    </div>
  );
}

export default NewOrder;

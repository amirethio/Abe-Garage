import React from "react";
import EmployeeForm from "../../components/Admin/EmployeeForm";
import AdminMenu from "../../components/Admin/AdminMenu";
function AddEmployee() {
  return (
    <div className="row best-bg">
      <div className="col-3">
        <AdminMenu />
      </div>
      <div className="col-9">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default AddEmployee;

import React from "react";
import EmployeeForm from "../../components/Admin/EmployeeForm";
import AdminMenu from "../../components/Admin/AdminMenu";
function AddEmployee() {
  return (
    <div className="row best-bg">
      <div className="col-3 pl-0 pr-0">
        <AdminMenu />
      </div>
      <div className="col-9 pl-0 pr-0">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default AddEmployee;

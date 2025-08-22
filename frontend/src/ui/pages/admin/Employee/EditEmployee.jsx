import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import EditEmployeeForm from "../../../components/Admin/Employee/EmployeeForm";

function EditEmployee() {
  return (
    <div className="row best-bg responsive-admin-page">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0">
        <AdminMenu />
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0">
        <EditEmployeeForm />
      </div>
    </div>
  );
}

export default EditEmployee;

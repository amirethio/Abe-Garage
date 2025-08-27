import React, { useState } from "react";
import EmployeeForm from "../../../components/Admin/Employee/EmployeeForm";
import AdminLayout from "../../../components/Admin/AdminLayout";



function AddEmployee() {


  return (
    <AdminLayout>
      <EmployeeForm/>
    </AdminLayout>
  );
}

export default AddEmployee;

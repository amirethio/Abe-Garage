import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import EmployeeList from "../../../components/Admin/Employee/EmployeeList";
import AdminLayout from "../../../components/Admin/AdminLayout";
function Employee() {
  return (
   <AdminLayout>
    <EmployeeList/>
   </AdminLayout>
  );
}

export default Employee;

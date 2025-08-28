import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import {
  listEmployee,
  deleteEmployee,
} from "../../../../services/employee.service";
import { Link } from "react-router-dom";
import { LargeLoader } from "../../Loader";
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [deletestatus, setDeleteStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      setDeleteStatus((pre) => !pre);
    });
  };
  useEffect(() => {
    listEmployee().then((data) => {
      setEmployees(data);
      setLoading(false);
    });
  }, [deletestatus]);
  if (loading) {
    return <LargeLoader />;
  }
  return (
    <div className="admin-right-side p-4">
      <section className="contact-section pt-0">
        <div className="contact-title mb-4">
          <h2>Employees</h2>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Active</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Added Date</th>
              <th>Role</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees?.length > 0 ? (
              employees?.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.active_employee ? "Yes" : "No"}</td>
                  <td>{employee.employee_first_name}</td>
                  <td>{employee.employee_last_name}</td>
                  <td>{employee.employee_email}</td>
                  <td>{employee.employee_phone}</td>
                  <td>
                    {format(
                      new Date(employee.added_date),
                      "MM - dd - yyyy | HH:mm"
                    )}
                  </td>
                  <td>{employee.company_role_name}</td>
                  <td>
                    <div className="edit-delete-icons">
                      <Link to={`/admin/${employee.employee_id}/edit-employee`}>
                        <Button variant="warning" size="sm" className="me-2">
                          <i className="bi bi-pencil-square me-1"></i> Edit
                        </Button>{" "}
                      </Link>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          handleDelete(employee.employee_id);
                        }}
                      >
                        <i className="bi bi-trash me-1"></i> Delete{" "}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-3">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default EmployeeList;

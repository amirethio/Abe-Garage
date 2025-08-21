import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import { listEmployee } from "../../../services/employee.service";
import { Link } from "react-router-dom";
function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployee().then((data) => setEmployees(data));
  }, []);

  return (
    <div className="admin-right-side p-4">
      <section className="contact-section">
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
            {employees.length ? (
              employees.map((employee) => (
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
                      <Button variant="warning" size="sm" className="me-2">
                        <Link
                          to={`/admin/${employee.employee_id}/edit-employee`}
                        >
                          Edit
                        </Link>
                      </Button>
                      <Button variant="danger" size="sm">
                        <Link to={``}>Delete</Link>
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

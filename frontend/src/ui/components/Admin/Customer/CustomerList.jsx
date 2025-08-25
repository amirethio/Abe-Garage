import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import { listCustomers } from "../../../../services/customer.service";
import { Link } from "react-router-dom";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    listCustomers().then((data) => setCustomers(data));
  }, []);

  return (
    <div className="admin-right-side p-4">
      <section className="contact-section">
        <div className="contact-title mb-4">
          <h2>Customers</h2>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Added Date</th>
              <th>Active</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.length ? (
              customers.map((customer) => (
                <tr key={customer.customer_id}>
                  <td>{customer.customer_first_name}</td>
                  <td>{customer.customer_last_name}</td>
                  <td>{customer.customer_email}</td>
                  <td>{customer.customer_phone_number}</td>
                  <td>
                    {format(
                      new Date(customer.customer_added_date),
                      "MM - dd - yyyy | HH:mm"
                    )}
                  </td>
                  <td>{customer.active_customer_status ? "Yes" : "No"}</td>
                  <td>
                    <div className="edit-delete-icons">
                      <Button variant="warning" size="sm" className="me-2">
                        <Link
                          to={`/admin/${customer.customer_hash}/edit-customer`}
                        >
                          Edit
                        </Link>
                      </Button>
                      <Button variant="danger" size="sm">
                        Delete
                      </Button>
                      <Button variant="success" size="sm" className="me-2">
                        <Link
                          to={`/admin/Profile/${customer.customer_hash}`}
                          className="text-white text-decoration-none"
                        >
                          Profile
                        </Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-3">
                  No Customers found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default CustomerList;

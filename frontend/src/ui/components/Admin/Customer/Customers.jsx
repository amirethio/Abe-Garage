import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { orderFetch } from "./../../../../services/order.service";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Pagination } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { deleteCustomer } from "./../../../../services/customer.service";
import {LargeLoader} from "../../Loader";


function Customers() {
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const [Focus, setFocus] = useState(false);
  const [page, setPage] = useState(1);
  const [deletestatus, setDeleteStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDelete = (id) => {
    deleteCustomer(id).then(() => {
      setDeleteStatus((pre) => !pre);
    });
  };
  useEffect(() => {
    orderFetch(query).then((res) => {
      setResults(res);
      setLoading(false);
    });
  }, [query, page, deletestatus]);
  if (loading) {
    return <LargeLoader />;
  }
  return (
    <>
      <section className="contact-section custom-bg pl-5 responsive-form">
        <div className="auto-container contact-title ml-6 pl-5">
          <h2>Customers</h2>
        </div>
        <div className="container mt-5">
          {/* Search input */}
          <div className={Focus ? "all-one" : ""}>
            <div className="position-relative mb-4 serch-wrapper">
              <input
                //   type="search"
                className=" form-control-lg ps-5 custom-bg"
                placeholder="Search customers..."
                value={query}
                onChange={handleChange}
                style={{ borderRadius: "8px", width: "100%" }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
              <div
                className=" top-50 translate-middle-y ms-3"
                style={{ color: "grey" }}
              >
                <FaSearch />
              </div>
            </div>
            {/* Results */}
            <Table striped bordered hover responsive>
              {result?.length ? (
                <>
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
                  {result.map((customer) => (
                    <>
                      <tbody>
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
                          <td>
                            {customer.active_customer_status ? "Yes" : "No"}
                          </td>
                          <td>
                            <div className="edit-delete-icons">
                              <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                              >
                                <Link
                                  to={`/admin/${customer.customer_hash}/edit-customer`}
                                >
                                  Edit
                                </Link>
                              </Button>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                  handleDelete(customer.customer_id)
                                }
                              >
                                Delete
                              </Button>
                              <Button
                                variant="success"
                                size="sm"
                                className="me-2"
                              >
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
                      </tbody>
                    </>
                  ))}
                </>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={8} className="text-center py-3">
                      No Customers found
                    </td>
                  </tr>
                </tbody>
              )}
            </Table>
            {/* Pagination */}
            <div className="d-flex justify-content-end mt-3">
              <Pagination>
                <Pagination.Prev
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next>
                  <FaArrowRight className="ms-1" />
                </Pagination.Next>
              </Pagination>
            </div>
          </div>
          <button
            className="theme-btn btn-style-one mt-3 ml-3"
            type="submit"
            data-loading-text="Please wait..."
            onClick={() => {
              navigate(`/admin/add-employee`);
            }}
          >
            <Link>ADD NEW CUSTOMER</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Customers;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { orderFetch } from "./../../../services/order.service";
import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";

function NewOrderForm() {
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const [user, setUser] = useState({});
  const [IsSelected, setIsSelected] = useState(false);
  const [Focus, setFocus] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleRowClick = (index) => {
    setUser(result[index]);
    setIsSelected(true);
  };
  useEffect(() => {
    orderFetch(query).then((res) => {
      setResults(res);
    });
  }, [query]);

  return (
    <>
      <section className="contact-section custom-bg pl-5 responsive-form">
        <div className="auto-container contact-title ml-6 pl-5">
          <h2>Create a new order</h2>
        </div>
        {IsSelected === true ? (
          <div className="container mt-5">
            <div className="card shadow p-4">
              <div className="d-flex justify-content-between align-items-start">
                {/* Left Section: Customer Details */}
                <div className="service-block-one">
                  <h2 className="mb-2">
                    {user.customer_first_name} {user.customer_last_name}
                  </h2>
                  <p className="mb-1">
                    <strong>Email:</strong> {user.customer_email}
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {user.customer_phone_number}
                  </p>
                  <p className="mb-1">
                    <strong>Active Customer:</strong>{" "}
                    {user.active_customer_status ? "Yes" : "No"}
                  </p>
                  <span
                    style={{
                      color: "black",
                    }}
                  >
                    <strong className="mb-1"> Edit customer {"  "}</strong>
                    <Button variant="warning" size="sm" className="me-2">
                      <Link
                        to={`/admin/${user.customer_hash}/edit-customer`}
                        className="edit"
                      >
                        Edit
                      </Link>
                    </Button>
                  </span>
                </div>

                {/* Right Section: Icons */}
                <div className="d-flex flex-column align-items-end">
                  <button
                    className="btn mb-2"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "1.5rem",
                    }}
                    onClick={() =>{
                         setIsSelected(false);
                          setFocus(false);
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
              {Focus ? (
                <Table striped bordered hover responsive>
                  {result.length > 0 && (
                    <tbody>
                      {result.map((customer, index) => (
                        <tr
                          key={index}
                          onMouseDown={() => handleRowClick(index)}
                        >
                          <td>{customer.customer_first_name}</td>
                          <td>{customer.customer_last_name}</td>
                          <td>{customer.customer_email}</td>
                          <td>{customer.customer_phone_number}</td>
                          <td>
                            <FaHandPointUp size={22} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {/* No results message */}
                  {query && result.length === 0 && (
                    <tbody>
                      <tr>
                        <td colSpan={8} className="text-center py-3">
                          No Customers found
                        </td>
                      </tr>
                    </tbody>
                  )}
                </Table>
              ) : (
                <button
                  className="theme-btn btn-style-one "
                  type="submit"
                  data-loading-text="Please wait..."
                  onClick={() => {
                    navigate(`/admin/add-employee`);
                  }}
                >
                  <Link>ADD NEW EMPLOYEE</Link>
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default NewOrderForm;

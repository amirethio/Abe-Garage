import React, { useEffect, useState, useRef } from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import { orderFetch } from "../../../services/order.service";

function CustomerSearch({
  query,
  setQuery,
  onSelectCustomer,
  focus,
  setFocus,
  navigate,
}) {
  const [results, setResults] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    orderFetch(query).then((res) => setResults(res));
  }, [query]);

  // Click outside detection
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setFocus(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setFocus]);

  return (
    <div ref={wrapperRef} className="container mt-5">
      <div className="position-relative mb-4 serch-wrapper">
        <input
          className="form-control-lg ps-5 custom-bg"
          placeholder="Search customers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          style={{ borderRadius: "8px", width: "100%" }}
        />
        <div
          className="top-50 translate-middle-y ms-3"
          style={{ color: "grey" }}
        >
          <FaSearch />
        </div>
      </div>

      {focus && (
        <Table striped bordered hover responsive>
          {results.length > 0 ? (
            <tbody>
              {results.map((customer, index) => (
                <tr key={index} onMouseDown={() => onSelectCustomer(customer)}>
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
          ) : (
            query && (
              <tbody>
                <tr>
                  <td colSpan={8} className="text-center py-3">
                    No Customers found
                  </td>
                </tr>
              </tbody>
            )
          )}
        </Table>
      )}

      {!focus && (
        <Button
          className="theme-btn btn-style-one"
          onClick={() => navigate("/admin/add-employee")}
        >
          ADD NEW EMPLOYEE
        </Button>
      )}
    </div>
  );
}

export default CustomerSearch;

import React, { useEffect, useState, useRef } from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import { orderFetch } from "../../../../../services/order.service";
import { Pagination } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { MiniLoader } from "../../../Loader";

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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    orderFetch(query).then((res) => {
      setResults(res);
      setLoading(false);
    });
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
  }, [setFocus, page]);

  return (
    <div ref={wrapperRef} className="container mt-5">
      <div className={focus ? "all-one" : " "}>
        <div className="position-relative mb-4 serch-wrapper ">
          <input
            className="form-control-lg ps-5 custom-bg"
            placeholder="Search for customers with first name or last name ..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLoading(true);
            }}
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
        {loading && focus ? (
          <div>
            <MiniLoader />
          </div>
        ) : (
          <>
            {focus && (
              <>
                <Table striped bordered hover responsive>
                  {results.length > 0 ? (
                    <tbody>
                      {results.map((customer, index) => (
                        <tr
                          key={index}
                          onMouseDown={() => onSelectCustomer(customer)}
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
              </>
            )}
          </>
        )}
        <>
          {!focus && (
            <Button
              className="theme-btn btn-style-one"
              onClick={() => navigate("/admin/add-customers")}
            >
              ADD NEW CUSTOMER
            </Button>
          )}
        </>
      </div>
    </div>
  );
}

export default CustomerSearch;

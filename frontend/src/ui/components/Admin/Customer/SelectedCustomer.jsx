import React from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function SelectedCustomer({ user, onClose }) {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-start">
          {/* Left: Customer Details */}
          <div>
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

            <span className="fw-bold me-2">
              Edit Customer Info{" "}
              <Button variant="warning" size="sm" className="ms-2">
                <Link
                  to={`/admin/${user.customer_hash}/edit-customer`}
                  className="text-dark text-decoration-none"
                >
                  Edit
                </Link>
              </Button>
            </span>
          </div>

          {/* Right: Close Icon */}
          <div>
            <button
              className="btn"
              style={{
                background: "transparent",
                border: "none",
                fontSize: "1.8rem",
                fontWeight: "bold",
              }}
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedCustomer;

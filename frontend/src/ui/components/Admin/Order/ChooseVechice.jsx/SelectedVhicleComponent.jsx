import React from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function SelectedVhicleComponent({ SelectedVhicle, setSelectedVhicle }) {
  
  return (
    <>
      <div className="container mt-5">
        <div className="card shadow p-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h2 className="mb-2">
                {SelectedVhicle.vehicle_make} {SelectedVhicle.vehicle_model}
              </h2>
              <p className="mb-1">
                <strong>Vehicle color:</strong> {SelectedVhicle.vehicle_color}
              </p>
              <p className="mb-1">
                <strong>Vehicle tag:</strong> {SelectedVhicle.vehicle_tag}
              </p>
              <p className="mb-1">
                <strong>Vehicle year:</strong> {SelectedVhicle.vehicle_year}
              </p>
              <p className="mb-1">
                <strong>Vehicle mileage:</strong>{" "}
                {SelectedVhicle.vehicle_mileage}
              </p>
              <p className="mb-1">
                <strong>Vehicle serial:</strong> {SelectedVhicle.vehicle_serial}
              </p>

              <span className="fw-bold me-2">
                Edit vehicle Info{" "}
                <Button variant="warning" size="sm" className="ms-2">
                  <Link to="" className="text-dark text-decoration-none">
                    Edit
                  </Link>
                </Button>
              </span>
            </div>

            <div>
              <button
                className="btn"
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setSelectedVhicle(null);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedVhicleComponent;

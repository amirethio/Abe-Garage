import React, { useState } from "react";
import {
  FaUser,
  FaCar,
  FaCalendarAlt,
  FaUserTie,
  FaTools,
  FaHashtag,
  FaCopy,
  FaMoneyBillWave,
  FaTimes,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { updateOrder } from "./../../../../services/order.service";

const OrderDetailModal = ({ setIsDetail, orderData, setFetch }) => {
  const [selectedStatus, setSelectedStatus] = useState({
    order_id: orderData.order_id,
    order_status: orderData.order_status,
  });

  const handleCancel = () => {
    setIsDetail(false);
  };
  const handleChange = (e) => {
    setSelectedStatus((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const orderSubmit = async () => {
    const result = await updateOrder(selectedStatus);
    setIsDetail(false)
    setFetch((pre)=>!pre)
  };
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        {/* header */}
        <div className="modal-header">
          <div className="header-left">
            <h5 className="header-title">
              <FaTools className="icon me-1" /> Order #123 - Oil Change
            </h5>
          </div>
          <div className="selected">
            {selectedStatus.order_status == 0 && (
              <span className="status-chip status-inprogress">
                <FaTimesCircle className="me-1" /> In Progress
              </span>
            )}
            {selectedStatus.order_status == 1 && (
              <span className="status-chip status-completed">
                <FaCheckCircle className="me-1" /> Completed
              </span>
            )}
            {selectedStatus.order_status == 2 && (
              <span className="status-chip status-reserved">
                <FaCalendarCheck className="me-1" /> Reserved
              </span>
            )}
          </div>
        </div>

        {/* body */}
        <div className="modal-body">
          {/* Customer Info & Vehicle Info */}
          <div className="rowu">
            <div className="col-card">
              <div className="card-section">
                <h6 className="section-title">
                  <FaUser className="icon" /> Customer Info
                </h6>
                <p>
                  <strong>Name:</strong> {orderData.customer_first_name}
                </p>
                <p>
                  <strong>Email:</strong> {orderData.customer_email}
                </p>
                <p>
                  <strong>Phone:</strong> {orderData.customer_phone_number}
                </p>
              </div>
            </div>

            <div className="col-card">
              <div className="card-section">
                <h6 className="section-title">
                  <FaCar className="icon" /> Vehicle Info
                </h6>
                <p>
                  <strong>Make/Model:</strong> {orderData.vehicle_make}{" "}
                  {orderData.vehicle_model}
                </p>
                <p>
                  <strong>Year:</strong> {orderData.vehicle_year}
                </p>
                <p>
                  <strong>Tag:</strong> {orderData.vehicle_tag || "-"}
                </p>
                <p>
                  <strong>Serial:</strong> {orderData.vehicle_serial}
                </p>
                <p style={{ color: "green", fontWeight: 600 }}>
                  <FaMoneyBillWave className="icon me-1" />{" "}
                  {orderData.order_total_price}$
                </p>
              </div>
            </div>
          </div>

          {/* Employee & Dates */}
          <div className="rowu">
            <div className="col-card">
              <div className="card-section px-3 py-0">
                <h6 className="section-title">
                  <FaUserTie className="icon" /> Registered By
                </h6>
                <p>{orderData.employee_first_name || "Unassigned"}</p>
              </div>
              <div className="card-section px-3 py-0">
                <h6 className="section-title">
                  <FaUserTie className="icon" /> Assigned Employee
                </h6>
                <p>{orderData.selected_employee || "Unassigned"}</p>
              </div>
            </div>

            <div className="col-card">
              <div className="card-section">
                <h6 className="section-title">
                  <FaCalendarAlt className="icon" /> Dates
                </h6>
                <p>
                  <strong>Order Date:</strong>{" "}
                  {new Date(orderData.order_date).toLocaleString()}
                </p>
                <p>
                  <strong>Estimated Completion:</strong>{" "}
                  {new Date(
                    orderData.estimated_completion_date
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Services & Additional Requests */}
          <div className="rowu">
            <div className="col-card">
              <div className="card-section">
                <h6 className="section-title">
                  <FaTools className="icon" /> Services Requested
                </h6>
                <p>{orderData.service_name || "No Services Selected"}</p>
              </div>
            </div>

            <div className="col-card">
              <div className="card-section">
                <h6 className="section-title">
                  <FaTools className="icon" /> Additional Requests
                </h6>
                <p>{orderData.additional_request || "None"}</p>
              </div>
            </div>
          </div>
          <div className="order-status-container mt-0">
            <label htmlFor="order-status" className="order-status-label">
              Order Status:
            </label>
            <select
              id="order-status"
              className={`order-status-select status-${selectedStatus.order_status}`}
              value={selectedStatus.order_status}
              onChange={(e) => handleChange(e)}
              name="order_status"
            >
              <option value={0}>🟠 In Progress</option>
              <option value={1}>✅ Completed</option>
              <option value={2}>📅 Reserved</option>
            </select>
          </div>

          {/* Hash */}
          <div className="hash-row d-flex justify-content-between align-items-center">
            <div className="hash-text">
              <strong>Hash:</strong> {orderData.order_hash}
            </div>
            <button className="btn btn-outline-secondary btn-sm circle-btn">
              <FaCopy />
            </button>
          </div>
        </div>
        {/* footer */}
        <div className="modal-footer d-flex justify-content-end align-items-center">
          <button
            className="btn btn-outline-light btn-sm me-2"
            onClick={handleCancel}
          >
            <FaTimes className="me-1" /> Cancel
          </button>
          <button className="btn btn-light btn-sm" onClick={orderSubmit}>
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;

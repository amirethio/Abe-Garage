import React from "react";
import {
  BsCartCheck,
  BsCartPlus,
  BsPeople,
  BsGear,
  BsTools,
  BsSpeedometer2,
  BsPaintBucket,
  BsCarFront,
} from "react-icons/bs";

function Dashboard() {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title style-two">
          <h2>Admin Dashboard</h2>
          <div className="text">
            Manage your orders, employees, and services from here.
          </div>
        </div>

        <div className="row">
          {/* Orders */}
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Orders</h5>
              <h2>Manage Orders</h2>
              <a href="#" className="read-more text-danger">
                List of Orders
              </a>
              <div className="icon">
                <BsCartCheck size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Orders</h5>
              <h2>New Order</h2>
              <a href="#" className="read-more text-danger">
                Add Order
              </a>
              <div className="icon">
                <BsCartPlus size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          {/* Employees */}
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Employees</h5>
              <h2>Manage Employees</h2>
              <a href="/admin/employees" className="read-more text-danger">
                List of Employees
              </a>
              <div className="icon">
                <BsPeople size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service & Repairs</h5>
              <h2>Engine Repair</h2>
              <a href="#" className="read-more text-danger">
                Read More
              </a>
              <div className="icon">
                <BsGear size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service & Repairs</h5>
              <h2>Performance Upgrade</h2>
              <a href="#" className="read-more text-danger">
                Read More
              </a>
              <div className="icon">
                <BsTools size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service & Repairs</h5>
              <h2>Transmission Services</h2>
              <a href="#" className="read-more text-danger">
                Read More
              </a>
              <div className="icon">
                <BsSpeedometer2 size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service & Repairs</h5>
              <h2>Denting & Painting</h2>
              <a href="#" className="read-more text-danger">
                Read More
              </a>
              <div className="icon">
                <BsPaintBucket size={38} className="text-secondary" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service & Repairs</h5>
              <h2>Tyre & Wheels</h2>
              <a href="#" className="read-more text-danger">
                Read More
              </a>
              <div className="icon">
                <BsCarFront size={38} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

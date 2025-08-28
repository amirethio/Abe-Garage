import React from "react";
import whychoose from "./../../../assets/images/misc/why-choose.jpg";
import "bootstrap-icons/font/bootstrap-icons.css"; 

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="auto-container">
        <div className="row">
          {/* WHY CHOOSE US */}
          <div className="col-lg-6">
            <div className="sec-title style-two">
              <h2>Why Choose Us</h2>
              <div className="text">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation heading towards.
              </div>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-wrench"></i>
              </div>
              <h4>Certified Expert Mechanics</h4>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <h4>Fast And Quality Service</h4>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h4>Best Prices in Town</h4>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>Awarded Workshop</h4>
            </div>
          </div>

          {/* ADDITIONAL SERVICES */}
          <div className="col-lg-6">
            <div className="sec-title style-two">
              <h2>Additional Services</h2>
            </div>
            <div className="row">
              <div className="col-md-5 why-img">
                <div className="image">
                  <img src={whychoose} alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <ul className="list">
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>General Auto
                    Repair & Maintenance
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Transmission
                    Repair & Replacement
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Tire Repair
                    and Replacement
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>State
                    Emissions Inspection
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Brake Job /
                    Brake Services
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Electrical
                    Diagnostics
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Fuel System
                    Repairs
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Starting and
                    Charging Repair
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Steering and
                    Suspension Work
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Emission
                    Repair Facility
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Wheel
                    Alignment
                  </li>
                  <li>
                    <i className="bi bi-check text-danger me-2"></i>Computer
                    Diagnostic Testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

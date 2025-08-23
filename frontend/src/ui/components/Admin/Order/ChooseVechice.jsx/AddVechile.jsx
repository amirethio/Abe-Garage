import React, { useState } from "react";
import { submitvehicle } from "../../../../../services/vehicle.service";
import { FaTimes } from "react-icons/fa";

function Addvehicle({ id, newCustomer, setnewCustomer }) {
  const [formData, setFormData] = useState({
    customer_id: id,
    vehicle_year: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_type: "",
    vehicle_mileage: "",
    vehicle_tag: "",
    vehicle_serial: "",
    vehicle_color: "",
  });

  const [errors, setErrors] = useState({});
  const [ServerError, setServerError] = useState("");
  const [sucess, setSucess] = useState("");

  function handleChange(event) {
    setErrors({});
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors("");
    setSucess("");
    try {
      const data = await submitvehicle(formData);
      setnewCustomer(false);

      if (data.sucess == "false") {
        setServerError(data.message);
        return;
      }
      setSucess("Added sucessfully");
    } catch (error) {
      setServerError(error.message || "Submission failed");
    }
  };

  return (
    <>
      {newCustomer && (
        <section className="contact-section p-0  pl-3 responsive-form container mt-5 ">
          <div className="auto-container contact-title ml-6 pl-5  shadow p-4 add-vechile vehicle-cancel">
            <div className="">
              <h2>Add a new vehicle</h2>
              {ServerError && (
                <div className="d-flex mt-3">
                  <div
                    className="alert alert-danger py-2 px-3 shadow-sm"
                    role="alert"
                  >
                    {ServerError}
                  </div>
                </div>
              )}
              {sucess && (
                <div className="d-flex mt-3">
                  <div
                    className="alert alert-success py-2 px-3 shadow-sm"
                    role="alert"
                  >
                    {sucess}
                  </div>
                </div>
              )}
              <div className="row clearfix">
                <div className="form-column col-lg-7 col-md-12">
                  <div className="inner-column">
                    <div className="contact-form">
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <div className="row clearfix ">
                          <div className="form-group col-12">
                            <input
                              type="email"
                              name="vehicle_year"
                              value={formData.vehicle_year}
                              placeholder="vehicle year"
                              onChange={handleChange}
                              required
                            />
                            {errors.vehicle_year && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_year}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_make"
                              value={formData.vehicle_make}
                              placeholder="vehicle make"
                              onChange={handleChange}
                              required
                            />
                            {errors.vehicle_make && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_make}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_model"
                              value={formData.vehicle_model}
                              placeholder="vehicle model  "
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_type"
                              value={formData.vehicle_type}
                              onChange={handleChange}
                              placeholder="vehicle type"
                              required
                            />
                            {errors.vehicle_type && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_type}
                              </div>
                            )}
                          </div>
                          {/* //////////// */}
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_mileage"
                              value={formData.vehicle_mileage}
                              onChange={handleChange}
                              placeholder="vehicle mileage"
                              required
                            />
                            {errors.vehicle_mileage && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_mileage}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_tag"
                              value={formData.vehicle_tag}
                              onChange={handleChange}
                              placeholder="vehicle tag"
                              required
                            />
                            {errors.vehicle_tag && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_tag}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_serial"
                              value={formData.vehicle_serial}
                              onChange={handleChange}
                              placeholder="vehicle serial"
                              required
                            />
                            {errors.vehicle_serial && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_serial}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              name="vehicle_color"
                              value={formData.vehicle_color}
                              onChange={handleChange}
                              placeholder="vehicle color"
                              required
                            />
                            {errors.vehicle_color && (
                              <div className="text-danger small mt-2">
                                {errors.vehicle_color}
                              </div>
                            )}
                          </div>

                          <div className="form-group col-12">
                            <button
                              className="theme-btn btn-style-one w-100"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span>ADD vehicle</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="btn"
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
                type="button"
                onClick={() => {
                  setnewCustomer();
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Addvehicle;

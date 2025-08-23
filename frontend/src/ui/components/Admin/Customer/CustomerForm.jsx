import React, { useState } from "react";
import { submitcustomer } from "../../../../services/customer.service";
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  const [formData, setFormData] = useState({
    customer_email: "",
    customer_first_name: "",
    customer_last_name: "",
    customer_phone: "",
    active_customer: 1,
  });

  const [errors, setErrors] = useState({});
  const [ServerError, setServerError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setErrors({});
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customer_first_name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.customer_first_name)) {
      newErrors.name = "Name must contain only letters";
    }
    if (!formData.customer_email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.customer_email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.customer_phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,}$/.test(formData.customer_phone)) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError("");
    const validateResponse = validateForm();
    if (Object.keys(validateResponse).length > 0) {
      setErrors(validateResponse);
      return;
    }
    try {
      const data = await submitcustomer(formData);
      if (data.sucess === false) {
        setServerError(data.message);
        return;
      }
      setServerError("customer registered sucessfully");
    } catch (error) {
      setServerError(error.message || "Submission failed");
    }
  };

  return (
    <section className="contact-section custom-bg pl-5 responsive-form">
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>Add a new Customer</h2>
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
        <div className="row clearfix">
          <div className="form-column col-lg-7 col-md-12">
            <div className="inner-column">
              <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row clearfix bg-light">
                    <div className="form-group col-12">
                      <input
                        type="email"
                        name="customer_email"
                        value={formData.customer_email}
                        placeholder="customer email"
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="text-danger small mt-2">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="customer_first_name"
                        value={formData.customer_first_name}
                        placeholder="customer first name"
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="text-danger small mt-2">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="customer_last_name"
                        value={formData.customer_last_name}
                        placeholder="customer last name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="customer_phone"
                        value={formData.customer_phone}
                        onChange={handleChange}
                        placeholder="customer phone(555-555-5555)"
                      />
                      {errors.phone && (
                        <div className="text-danger small mt-2">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12">
                      <button
                        className="theme-btn btn-style-one w-100"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>ADD customer</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-column col-lg-4 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  );
}

export default CustomerForm;

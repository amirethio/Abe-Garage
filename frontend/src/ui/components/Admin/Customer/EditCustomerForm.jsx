import React, { useEffect, useState } from "react";
import {
  singleCustomer,
  updatecustomer,
} from "../../../../services/customer.service";
import { useParams } from "react-router-dom";

function EditCustomerForm() {
  const { hash } = useParams();
  const [customer, setCustomer] = useState({});

  const InitalialState = {
    customer_id: "",
    customer_hash: hash,
    customer_first_name: "",
    customer_last_name: "",
    customer_phone_number: "",
    active_customer_status: 1,
  };
  const [formData, setFormData] = useState(InitalialState);
  const [errors, setErrors] = useState({});
  const [ServerError, setServerError] = useState("");
  const [sucess, setSucess] = useState("");

  // functions to handle changes
  function handleChange(event) {
    setErrors({});
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleChange1 = (event) => {
    if (event.target.checked == true) {
      setFormData((prev) => ({
        ...prev,
        active_customer_status: 1,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        active_customer_status: 0,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customer_first_name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.customer_first_name)) {
      newErrors.name = "Name must contain only letters";
    }
    if (!formData.customer_phone_number.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,}$/.test(formData.customer_phone_number)) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors("");
    setSucess("");
    const validateResponse = validateForm();
    if (Object.keys(validateResponse).length > 0) {
      setErrors(validateResponse);
      return;
    }
    try {
      const data = await updatecustomer(formData);

      if (data.sucess == false) {

        setServerError(data.error);
        return;
      }
      setSucess("Updated sucessfully");
    } catch (error) {
      setServerError(error.message || "Submission failed");
    }
  };
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      customer_id: customer.customer_id,
    }));
  }, [customer]);

  useEffect(() => {
    singleCustomer(hash).then((res) => {
      setCustomer(res[0]);
    });
  }, [sucess, hash]);

  return (
    <section className="contact-section custom-bg pl-5 responsive-form">
   
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>
          Edit :{" "}
          {customer?.customer_first_name + " " + customer?.customer_last_name}
        </h2>

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
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row clearfix bg-light">
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
                        name="customer_phone_number"
                        value={formData.customer_phone_number}
                        onChange={handleChange}
                        placeholder="customer phone(555-555-5555)"
                      />
                      {errors.phone && (
                        <div className="text-danger small mt-2">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="d-flex flex-wrap gap-5 align-items-center">
                      <label for="activeCheck" className="pr-2">
                        {" "}
                        <h5>&nbsp; Is active customer</h5>
                      </label>
                      <input
                        type="checkbox"
                        id="activeCheck"
                        name="vehicle3"
                        checked={formData.active_customer_status}
                        onChange={handleChange1}
                        style={{ width: "auto" }}
                      />

                      <br></br>
                    </div>

                    <div className="form-group col-12">
                      <button
                        className="theme-btn btn-style-one w-100"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>UPDATE customer</span>
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

export default EditCustomerForm;

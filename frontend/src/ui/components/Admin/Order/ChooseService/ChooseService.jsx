import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchService } from "./../../../../../services/service.service";

function ChooseService({ selectedService, setSelectedService, setfinish }) {
  const [services, setservices] = useState([]);
  const [customService, setCustomService] = useState({
    price: "",
    service_description: "",
    estimated_time: "",
  });
  const [errors, setErrors] = useState({
    price: "",
    service_selection: "",
    service_description: "",
  });

  useEffect(() => {
    fetchService().then((res) => {
      setservices(res);
    });
  }, []);

  const handleChange = (serviceName) => {
    if (selectedService.services.includes(serviceName)) {
      setSelectedService({
        ...selectedService,
        services: selectedService.services.filter((s) => s !== serviceName),
      });
    } else {
      setSelectedService({
        ...selectedService,
        services: [...selectedService.services, serviceName],
      });
    }
  };

  const handleAddCustomService = (e) => {
    const { name, value } = e.target;
    setCustomService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      price: "",
      service_selection: "",
      service_description: "",
    };
    let hasError = false;

    if (customService.price.trim() === "") {
      newErrors.price = "Price is required.";
      hasError = true;
    }
    if (
      selectedService.services.length === 0 &&
      customService.service_description.trim() === ""
    ) {
      newErrors.service_selection =
        "Select at least one service OR fill description.";
      hasError = true;
    }
    if (customService.estimated_time.trim() === "") {
      newErrors.estimated_time = "Estimated completion date is required.";
      hasError = true;
    }


    setErrors(newErrors);

    if (hasError) return;

    const updatedService = {
      ...selectedService,
      price: customService.price,
      additional_request: customService.service_description,
      estimated_time: customService.estimated_time,
    };
    setSelectedService(updatedService);
    if (updatedService.price !== "" && updatedService.services.length > 0) {
      setfinish(true);
    }
  };

  return (
    <>
      <section className="contact-section custom-bg pl-4 responsive-form pb-0 pr-5">
        <div className="auto-container contact-title ml-6 pl-5">
          <h2 className="mb-4">Choose service</h2>
          {services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-start border rounded p-3 mb-3 shadow-sm bg-white"
              >
                <div>
                  <h4 className="mb-2">{service.service_name}</h4>
                  <p className="mb-0 text-muted">
                    {service.service_description}
                  </p>
                </div>

                <div className="ms-3">
                  <Form.Check
                    type="checkbox"
                    checked={selectedService.services.includes(
                      service.service_id
                    )}
                    onChange={() => handleChange(service.service_id)}
                    style={{ transform: "scale(1.5)", cursor: "pointer" }}
                  />
                </div>
              </div>
            ))
          ) : (
            <h5>No services available</h5>
          )}
          {errors.service_selection && (
            <div className="text-danger small mt-2">
              {errors.service_selection}
            </div>
          )}
        </div>
      </section>

      <section className="contact-section custom-bg pl-4 responsive-form pr-5 pt-0">
        <div className="auto-container contact-title ml-6 pl-5">
          <div className="bg-white border rounded p-4 shadow-sm mt-4">
            <h2 className="mb-3">Additional Requests</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <textarea
                  className={`form-controlu ${
                    errors.service_description ? "is-invalid" : ""
                  }`}
                  rows="3"
                  placeholder="Service description"
                  value={customService.service_description}
                  name="service_description"
                  onChange={handleAddCustomService}
                ></textarea>
                {errors.service_description && (
                  <div className="text-danger small">
                    {errors.service_description}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-controlu mb-2 ${
                    errors.price ? "is-invalid" : ""
                  }`}
                  placeholder="Price"
                  value={customService.price}
                  name="price"
                  onChange={handleAddCustomService}
                />
                {errors.price && (
                  <div className="text-danger small">{errors.price}</div>
                )}
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <p className="pr-2">Estimated time</p>
                <input
                  type="date"
                  className={`form-controlu mb-2  ${
                    errors.estimated_time ? "is-invalid" : ""
                  }`}
                  style={{ width: "auto" }}
                  value={customService.estimated_time}
                  name="estimated_time"
                  onChange={handleAddCustomService}
                />
                {errors.estimated_time && (
                  <div className="text-danger small">
                    {errors.estimated_time}
                  </div>
                )}
              </div>

              <button type="submit" className="theme-btn btn-style-one">
                SUBMIT ORDER
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseService;

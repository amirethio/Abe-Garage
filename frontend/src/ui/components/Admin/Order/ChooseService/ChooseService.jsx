import React, { useState, useEffect } from "react";
import { fetchService } from "./../../../../../services/service.service";
import { LargeLoader } from "../../../Loader";

function ChooseService({ selectedService, setSelectedService, setfinish }) {
  const [services, setservices] = useState([]);
  const [errors, setErrors] = useState({
    price: "",
    service_selection: "",
    service_description: "",
    estimated_time: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService().then((res) => {
      setservices(res);
      setLoading(false);
    });
  }, []);

  // ✅ updates any field inside selectedService
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setSelectedService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ toggles services
  const handleChange = (serviceId) => {
    setSelectedService((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  // ✅ form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      price: "",
      service_selection: "",
      service_description: "",
      estimated_time: "",
    };

    let hasError = false;

    if (!selectedService.price?.trim()) {
      newErrors.price = "Price is required.";
      hasError = true;
    }
    if (
      selectedService.services.length === 0 &&
      !selectedService.additional_request?.trim()
    ) {
      newErrors.service_selection =
        "Select at least one service OR provide a description.";
      hasError = true;
    }
    if (!selectedService.estimated_time?.trim()) {
      newErrors.estimated_time = "Estimated completion date is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    // if everything is valid
    setfinish(true);
  };

  return (
    <>
      {loading ? (
        <LargeLoader />
      ) : (
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
                    <input
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
      )}

      <section className="contact-section custom-bg pl-4 responsive-form pr-5 pt-0">
        <div className="auto-container contact-title ml-6 pl-5">
          <div className="bg-white border rounded p-4 shadow-sm mt-4">
            <h2 className="mb-3">Additional Requests</h2>

            <form onSubmit={handleSubmit}>
              {/* Description */}
              <div className="mb-3">
                <textarea
                  className={`form-controlu ${
                    errors.service_description ? "is-invalid" : ""
                  }`}
                  rows="3"
                  placeholder="Service description"
                  value={selectedService.additional_request || ""}
                  name="additional_request"
                  onChange={handleFieldChange}
                />
                {errors.service_description && (
                  <div className="text-danger small">
                    {errors.service_description}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-controlu mb-2 ${
                    errors.price ? "is-invalid" : ""
                  }`}
                  placeholder="Price in Dollar eg, 10 (numbers only)"
                  value={selectedService.price || ""}
                  name="price"
                  onChange={handleFieldChange}
                />
                {errors.price && (
                  <div className="text-danger small">{errors.price}</div>
                )}
              </div>

              {/* Estimated Time */}
              <div className="mb-3 d-flex align-items-center gap-2">
                <p className="pr-2">Estimated time</p>
                <input
                  type="date"
                  className={`form-controlu mb-2 ${
                    errors.estimated_time ? "is-invalid" : ""
                  }`}
                  style={{ width: "auto" }}
                  value={selectedService.estimated_time || ""}
                  name="estimated_time"
                  onChange={handleFieldChange}
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

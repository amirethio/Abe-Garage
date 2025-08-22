import React from "react";
import { useState } from "react";
import { submitLogin } from "../../../services/login.service";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

function Login() {
  const [formData, setFormData] = useState({
    employee_email: "",
    employee_password: "",
  });
  const [error, setErrors] = useState("");
  const [validationError, setvalidationError] = useState("");
  const navigate = useNavigate();
  const context = useAuth();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // email validation
    if (!formData.employee_email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.employee_email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.employee_password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validate = validateForm();
    if (Object.keys(validate).length > 0) {
      setvalidationError(validate);
      return;
    }
    try {
      const submitForm = await submitLogin(formData);

      if (submitForm.status == "fail") {
        setErrors(submitForm.message);
        return;
      } else {
        context.setuserState(true);
        localStorage.setItem("authToken", submitForm?.data?.employee_token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);

      setErrors("something went wrong");
    }
  };
  return (
    <section className="contact-section custom-bg pl-5">
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>Login to your account</h2>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                {error && (
                  <div className="d-flex pl-md-5 ml-md-6 mt-3">
                    <div
                      className="alert alert-danger py-2 px-3 shadow-sm"
                      role="alert"
                    >
                      Email or password is incorrect
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix bg-light">
                    <span></span>{" "}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_email"
                        value={formData.employee_email}
                        placeholder="Employee email"
                        onChange={handleChange}
                      />
                      {validationError.email && (
                        <div className="text-danger small mt-2 ml-2">
                          {validationError.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={formData.employee_password}
                        placeholder="* * * * * *"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-column col-lg-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Login;

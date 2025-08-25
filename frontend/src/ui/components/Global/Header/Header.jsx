import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../../assets/images/logo.png";
import useAuth from "../../../../hook/useAuth";

function Header() {
  const context = useAuth();

  const logout = () => {
    context.setuserState(false);
    localStorage.removeItem("authToken");
  };

useEffect(() => {
  const topHeader = document.querySelector(".header-top");
  const mainHeader = document.querySelector(".header-upper");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      topHeader.classList.add("hide"); // hide small header
      mainHeader.classList.add("shrink"); // make main header fixed / sticky
    } else {
      topHeader.classList.remove("hide");
      mainHeader.classList.remove("shrink");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header className="main-header header-style-one head">
      {/* Top Header */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between">
            <div className="left-column">
              <div className="text">Enjoy the Beso while we fix your car</div>
              <div className="office-hour">
                Monday - Saturday 7:00AM - 6:00PM
              </div>
            </div>
            <div className="right-column">
              <div className="phone-number mr-5">
                {context?.userData
                  ? `Welcome 👋 ${context?.userData?.employee_first_name}`
                  : "Make Appointment"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Sticky) */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="right-column d-flex align-items-center">
              <div className="nav-outer">
                <nav className="main-menu navbar-expand-md navbar-light">
                  <ul className="navigation d-flex list-unstyled mb-0">
                    <li className="dropdown">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Admin Panel Link */}
              {context?.userData?.employee_role === 3 && (
                <div className="search-btn ml-3">
                  <Link to="/admin" className="admin-panel">
                    Dashboard
                  </Link>
                </div>
              )}

              {/* Login / Logout */}
              <div className="link-btn ml-3">
                {context?.userData ? (
                  <Link className="theme-btn btn-style-zero" onClick={logout}>
                    Logout
                  </Link>
                ) : (
                  <Link className="theme-btn btn-style-zero" to="/login">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

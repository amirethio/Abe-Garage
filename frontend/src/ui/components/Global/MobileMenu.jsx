import React, { useEffect } from "react";
import {
  FaTimes,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "./../../../assets/images/logo.png";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router-dom";
export default function MobileMenu({ isOpen, closeMenu, logout }) {
  const context = useAuth();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  return (
    <div className={`mobile-menu-container ${isOpen ? "visible" : ""}`}>
      <div className="menu-backdrop" onClick={closeMenu}></div>

      <div className="mobile-menu-box">
        <div className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </div>

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="mobile-navigation">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/track" onClick={closeMenu}>
              Track Order
            </Link>
          </li>
          {(context?.userData?.employee_role === 2 ||
            context?.userData?.employee_role === 3) && (
            <li>
              <Link to="/admin" onClick={closeMenu}>
                Dashboard
              </Link>
            </li>
          )}

          <li>
            {context.userData ? (
              <Link
                to="/admin"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            )}
          </li>
        </ul>

        <div className="social-links">
          <ul>
            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaPinterestP />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

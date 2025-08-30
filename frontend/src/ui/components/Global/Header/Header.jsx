import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import logo from "./../../../../assets/images/logo.png";
import useAuth from "../../../../hook/useAuth";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import MobileMenu from "../MobileMenu";
function Header() {
  const context = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);



  const logout = () => {
    context.setuserState(false);
    localStorage.removeItem("authToken");
  };

useEffect(() => {
  const topHeader = document.querySelector(".header-top");
  const mainHeader = document.querySelector(".header-upper");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      topHeader.classList.add("hide"); 
      mainHeader.classList.add("shrink"); 
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
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center">
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            <div className="right-column d-flex align-items-center">
              <div className="my d-none d-lg-flex align-items-center py-2">
                <div className="nav-outer">
                  <nav className="main-menu  navbar-light">
                    <ul className="navigation d-flex list-unstyled mb-0 ml-0">
                      <li className="dropdown mr-3 mr-xl-4">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown mr-3 mr-xl-4">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="dropdown mr-2 mr-xl-4">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="mr-3 mr-xl-4">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="mr-2 mr-xl-4">
                        <Link to="/track">Track Order</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {(context?.userData?.employee_role === 3 ||
                  context?.userData?.employee_role == 2) && (
                  <div className="search-btn ml-2 pl-2 pl-xl-4">
                    <Link to="/admin" className="admin-panel">
                      Dashboard
                    </Link>
                  </div>
                )}
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
              <div className="d-block d-lg-none py-3">
                <FaBars
                  size={28}
                  onClick={openMenu}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <MobileMenu
                isOpen={menuOpen}
                closeMenu={closeMenu}
                logout={logout}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

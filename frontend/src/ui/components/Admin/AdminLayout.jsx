import React, { useState } from "react";
import AdminMenu from "./AdminMenu";
import { FaAngleDoubleRight } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="row responsive-admin-page admin-page ">
      <div className="admin-layout ">
        <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <button
          onClick={toggleSidebar}
          className="btn btn-primary m-3 d-lg-none"
          style={{ cursor: "pointer", backgroundColor: "#222B48" }}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
      <div className="d-none d-lg-block col-lg-3 col-md-4 col-sm-12 pl-0 pr-0 bgw">
        <aside className="admin-sidebar sticky-menu">
          <AdminMenu />
        </aside>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0">
        <main className="admin-main">
          <div className="admin-content">
            {
                children
            }
          </div>
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;

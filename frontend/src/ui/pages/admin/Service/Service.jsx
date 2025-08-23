import React from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu';
import ServicesSection from '../../../components/Admin/ServicesSection';

function Service() {
  return (
    <div className="row  responsive-admin-page">
      <div className="col-lg-3 col-md-4 col-sm-12 pl-0 pr-0">
        <AdminMenu/>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 pl-0 pr-0 ">
       <ServicesSection/>
      </div>
    </div>
  );
}

export default Service
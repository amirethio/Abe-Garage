import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu'
import Dashboard from '../../components/Admin/Dashboard';
import AdminLayout from '../../components/Admin/AdminLayout';

function Admin() {
  return (
    <AdminLayout>
      <Dashboard/>
    </AdminLayout>
  );
}

export default Admin
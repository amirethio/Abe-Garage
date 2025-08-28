import React from "react";
import AdminMenu from "../../../components/Admin/AdminMenu";
import Order from "../../../components/Admin/Order/Order";
import OrdersList from "../../../components/Admin/Order/OrdersList";
import AdminLayout from "../../../components/Admin/AdminLayout";

function Orders() {
  return (
   <AdminLayout>
    <OrdersList/>
   </AdminLayout>
  );
}

export default Orders;

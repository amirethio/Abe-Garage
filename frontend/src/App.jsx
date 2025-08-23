import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./ui/components/Global/Footer/Footer";
import Header from "./ui/components/Global/Header/Header";
import Home from "./ui/pages/Global/Home";
import AddEmployee from "./ui/pages/admin/Employee/AddEmployee";
import Login from "./ui/pages/Global/Login";
import PrivateAuth from "./AUTH/PrivateAuth";
import NotAuthorized from "./ui/pages/Global/NotAuthorized";
import Employee from "./ui/pages/admin/Employee/Employee";
import About from "./ui/pages/Global/About";
import Contact from "./ui/pages/Global/Contact";
import Services from "./ui/pages/Global/Services";
import Admin from "./ui/pages/admin/Admin";
import AddCustomers from "./ui/pages/admin/Customer/AddCustomers";
import Customer from "./ui/pages/admin/Customer/Customer";
import EditEmployee from "./ui/pages/admin/Employee/EditEmployee";
import EditCustomer from "./ui/pages/admin/Customer/EditCustomer";
import NewOrder from "./ui/pages/admin/Order/NewOrder";
import Service from "./ui/pages/admin/Service/Service";
import AdminMenu from "./ui/components/Admin/AdminMenu";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/unauthorized" element={<NotAuthorized />} />
        <Route
          path="/admin"
          element={
            <PrivateAuth role={[3]}>
              <Admin />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuth role={[3]}>
              <AddEmployee />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/add-customers"
          element={
            <PrivateAuth role={[3]}>
              <AddCustomers />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <PrivateAuth role={[3]}>
              <Employee />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/:id/edit-employee"
          element={
            <PrivateAuth role={[3]}>
              <EditEmployee />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <PrivateAuth role={[3]}>
              <Customer />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/:hash/edit-customer"
          element={
            <PrivateAuth role={[3]}>
              <EditCustomer />
            </PrivateAuth>
          }
        />
        {/* order */}
        <Route
          path="/admin/new-order"
          element={
            <PrivateAuth role={[3]}>
              <NewOrder />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/services"
          element={
            <PrivateAuth role={[3]}>
              <Service />
            </PrivateAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

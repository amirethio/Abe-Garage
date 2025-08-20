import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header";
import Home from "./ui/pages/Home";
import AddEmployee from "./ui/pages/admin/AddEmployee";
import Login from "./ui/pages/Login";
import PrivateAuth from "./AUTH/PrivateAuth";
import NotAuthorized from "./ui/pages/NotAuthorized";
import Employee from "./ui/pages/admin/Employee";
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";
import Services from "./ui/pages/Services";
import Admin from "./ui/pages/admin/Admin";
import AddCustomers from "./ui/pages/admin/AddCustomers";
import Customer from "./ui/pages/admin/Customer";
import EditEmployee from "./ui/pages/admin/EditEmployee";

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
          path="/admin/:id/edit"
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;

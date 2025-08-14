import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header";
import Home from "./ui/pages/Home";
import AddEmployee from "./ui/pages/admin/AddEmployee";
import Login from "./ui/pages/Login";
import PrivateAuth from "./AUTH/PrivateAuth";
import NotAuthorized from "./ui/pages/NotAuthorized";
import Employee from "./ui/pages/admin/Employee";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<NotAuthorized />} />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuth role={[1]}>
              <AddEmployee />
            </PrivateAuth>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <PrivateAuth role={[1]}>
              <Employee />
            </PrivateAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

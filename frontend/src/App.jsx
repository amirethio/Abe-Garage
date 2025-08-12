import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from './ui/components/Footer/Footer'
import Header from "./ui/components/Header/Header";
import Home from "./ui/pages/Home";
import AddEmployee from "./ui/pages/admin/AddEmployee";
import Login from "./ui/pages/Login";
import PrivateAuth  from "./AUTH/PrivateAuth";
import NotAuthorized from "./ui/pages/NotAuthorized";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-employee"
          element={
            <PrivateAuth role={[1 ,2, 3]}>
              <AddEmployee />
            </PrivateAuth>
          }
        />
        <Route path="/unauthorized" element={<NotAuthorized />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

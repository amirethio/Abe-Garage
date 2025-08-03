import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "../ui/components/Footer/Footer";
import Header from "../ui/components/Header/Header";
import Home from "../ui/pages/Home";
import AddEmployee from "../ui/pages/admin/AddEmployee";
import Login from "../ui/pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

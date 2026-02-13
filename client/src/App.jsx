import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;

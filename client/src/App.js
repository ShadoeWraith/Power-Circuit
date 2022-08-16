import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <div className="footer-container">
        <div className="footer-wrap"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from './pages/product';
import Productd from "./pages/productdetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails" element={<Productd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

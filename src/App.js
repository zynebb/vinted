import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import Product from "./pages/Product";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <div className="header">
        <Header />{" "}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

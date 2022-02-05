import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
// import Product from "./pages/Product";
import Offer from "./containers/Offer";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <div className="header">
        <Header />{" "}
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/offer/:id">Offer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

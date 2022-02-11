import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
// import Product from "./pages/Product";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("userToken", token);
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };
  return (
    <div>
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="user/login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

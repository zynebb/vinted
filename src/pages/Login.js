import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      console.log(response);
      setUser(response.data.token);
      navigate("/");
      // let token = Cookies.get("token");
      // console.log(token);
      //   console.log("token");
      // "token" !==  token  ?(alert(message: "alert"))
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mauvais mdp");
      }
    }
  };

  return (
    <div>
      <h1>Se Connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
        />{" "}
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Mot de passe"
        />
        <br />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit" value="Submit">
          Se Connecter
        </button>
      </form>
    </div>
  );
};
export default Login;

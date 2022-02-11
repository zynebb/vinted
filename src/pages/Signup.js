import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
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
    console.log(name, email, password);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: name, email: email, password: password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h1>SeConnecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Nom d'utilisateur"
        />{" "}
        <br />
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Mot de passe"
        />{" "}
        <br />
        <button type="submit" value="Submit">
          Se Connecter
        </button>
      </form>
    </div>
  );
};
export default Signup;

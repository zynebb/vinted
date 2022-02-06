import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          " https://lereacteur-vinted-api.herokuapp.com/signup",
          { name: name, email: email, password: password }
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
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
          SeConnecter
        </button>
      </form>
    </div>
  );
};
export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("test");
  const [description, setDescription] = useState("test");
  const [brand, setBrand] = useState("test");
  const [size, setSize] = useState("test");
  const [color, setColor] = useState("test");
  const [condition, setCondition] = useState("test");
  const [city, setCity] = useState("test");
  const [price, setPrice] = useState(20);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", file);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div style={{ backgroundColor: "#ECEDED" }}>
      <h2
        style={{
          marginLeft: 90,
          fontSize: 15,
          fontWeight: "normal",
        }}
      >
        Vends ton article
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          marginLeft: 90,
          marginTop: 10,
          width: 1000,
          height: 2000,
        }}
      >
        <div>
          <input
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              width: 1000,
              height: 150,
              marginBottom: 10,
            }}
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
            }}
            type="text"
            placeholder="titre"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <textarea
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 80,
              marginBottom: 10,
            }}
            placeholder="Décris ton article"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
            }}
            type="text"
            placeholder="Marque"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
            }}
            type="text"
            placeholder="Taille"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
            }}
            type="text"
            placeholder="Couleur"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
            }}
            type="text"
            placeholder="Etat"
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 40,
              marginBottom: 10,
            }}
            type="text"
            placeholder="Lieu"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            style={{
              borderWidth: 1,
              borderColor: "#DEDFE0",
              border: "solid",
              backgroundColor: "white",
              width: 1000,
              height: 70,
            }}
            type="number"
            placeholder="Prix"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          {" "}
          <button
            style={{
              backgroundColor: "#42B2BA",
              color: "white",
              border: "none",
              width: 80,
              height: 30,
              marginLeft: 920,
              marginTop: 30,
              borderRadius: 5,
            }}
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;

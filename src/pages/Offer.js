import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Offer = () => {
  <Header />;
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargement ...</div>
  ) : (
    <div style={{ backgroundColor: "#EAEDEE", display: "flex" }}>
      <span>
        <img
          style={{ marginLeft: 70, marginTop: 30, height: 600, width: 432 }}
          src={data.product_image.secure_url}
          alt=""
        />
      </span>
      <span
        style={{
          paddingTop: 30,
          paddingLeft: 30,
          marginTop: 30,
          marginLeft: 240,
          width: 400,
          height: 600,
          backgroundColor: "white",
        }}
      >
        {" "}
        <div style={{ paddingBottom: 20, fontSize: 30 }}>
          {data.product_price} €
        </div>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem); // ["TAILLE"]
          return (
            <div key={index}>
              <span style={{ marginRight: "10px", color: "grey" }}>
                {keys[0]}
              </span>
              <span>{elem[keys[0]]}</span>
            </div>
          );
        })}
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: 20,
            paddingTop: 50,
          }}
        >
          {data.product_name}
        </div>
        <div style={{ paddingBottom: 20, color: "grey" }}>
          {data.product_description}
        </div>
        <div>{data.owner.account.username}</div>
      </span>
    </div>
  );
};
export default Offer;

import React, { useState, useEffect } from "react";
import axios from "axios";
import imagebanniere from "../img/imagebanniere.jpeg";
import { Link } from "react-router-dom";

const Home = ({}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div style={{}}>
        <div>
          {" "}
          <img
            style={{
              flexShrink: 0,
              position: "absolute",
              width: 1440,
              height: 513,
            }}
            src={imagebanniere}
            alt=""
          />
        </div>
        <div
          style={{
            paddingLeft: 30,
            paddingTop: 40,
            left: 100,
            top: 80,

            fontSize: 34,
            position: "relative",
            backgroundColor: "white",
            height: 300,
            width: 350,
          }}
        >
          Prêts à faire du tri dans vos placards ?
          <div
            style={{
              marginTop: 80,
              textAlign: "center",
              backgroundColor: "#017580",
              borderRadius: 5,
              width: 288,
              height: 50,
            }}
          >
            {" "}
            {/* <Link
              style={{
                fontSize: 22,
                color: "white",
              }}
              to="/offer"
            >
              Vends maintenant
            </Link> */}
            <button
              style={{
                color: "#017580",
                border: "none",
                backgroundColor: "white",
              }}
            >
              Découvrir comment ça marche
            </button>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 200, display: "flex", flexWrap: "wrap" }}>
        {data.offers.map((offer, index) => {
          return (
            <div
              style={{
                height: 440,
                width: 240,
              }}
              key={offer._id}
            >
              <Link to={`/offer/${offer._id}`} style={{ color: "grey" }}>
                <span>{offer.owner.username}</span>
                <span>
                  <img
                    style={{ flexShrink: 0, height: 360, width: 230 }}
                    src={offer.product_image.secure_url}
                    alt=""
                  />
                </span>{" "}
                <span>{offer.product_name}</span>{" "}
              </Link>{" "}
              <br />
              <span>{offer.product_price} €</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

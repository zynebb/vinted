import React from "react";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <span>
      <img
        src={logo}
        alt=""
        style={{ marginTop: 10, marginLeft: 80, height: 30, width: 80 }}
      />{" "}
      <button
        style={{
          marginLeft: 20,
          width: 600,
          height: 30,
          textAlign: "left",
          color: "grey",
        }}
        placeholder="Articles"
      >
        Articles
      </button>
      <button
        style={{
          fontSize: 12,
          marginLeft: 30,
          width: 152,
          height: 27,
          color: "#017580",
        }}
      >
        s'inscrire | se connecter
      </button>
      <button
        style={{
          fontSize: 12,
          marginLeft: 10,
          backgroundColor: "#017580",
          color: "white",
          fontWeight: "lighter",
          borderStyle: "none",
          width: 120,
          height: 30,
          borderRadius: 5,
        }}
      >
        vends maintenant
      </button>
      <button
        style={{
          border: "grey",
          color: "grey",
          borderRadius: 30,
          marginLeft: 10,
        }}
      >
        {" "}
        ?{" "}
      </button>
      <button
        style={{
          backgroundColor: "white",
          borderStyle: "none",
          marginLeft: 20,
        }}
      >
        FR
      </button>
    </span>
  );
};
export default Header;

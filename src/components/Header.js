import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Header = ({ token, setUser }) => {
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
      {token !== null ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          {" "}
          <Link to="/user/signup">s'inscrire</Link>
          <Link to="/user/login">se connecter</Link>
        </>
      )}
      {/* // style={{ */}
      {/* //   fontSize: 12,
        //   marginLeft: 30,
        //   width: 152,
        //   height: 27,
        //   color: "#017580",
        // }} */}
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

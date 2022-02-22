import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Header = ({ token, setUser }) => {
  return (
    <div>
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
          <button
            style={{
              borderRadius: 5,
              backgroundColor: "white",
              marginRight: 20,
              borderWidth: 1,
              borderColor: "#017580",
              width: 90,
              height: 25,
              marginLeft: 20,
            }}
          >
            {" "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",

                color: "#017580",
              }}
            >
              s'inscrire
            </Link>
          </button>
          <button
            style={{
              borderRadius: 5,
              backgroundColor: "white",
              marginRight: 20,
              borderWidth: 1,
              borderColor: "#017580",
              width: 100,
              height: 25,
              marginLeft: 20,
            }}
          >
            {" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",

                color: "#017580",
              }}
            >
              se connecter
            </Link>
          </button>
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
          marginLeft: 190,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: " #2DB0BA ",
          color: "white",
          fontWeight: "lighter",
          borderStyle: "none",
          width: 120,
          height: 30,
          borderRadius: 5,
        }}
      >
        <Link to="/publish">vends maintenant</Link>
      </button>
    </div>
  );
};
export default Header;

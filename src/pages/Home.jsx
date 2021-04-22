import React from "react";
import Login from "../components/Login";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>100 GÜN BOYUNCA KODLA</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          magni qui explicabo vitae quasi sapiente, a accusamus soluta
          perspiciatis accusantium.
        </h3>
      </header>
      <Login />
    </div>
  );
};

export default Home;

import React from "react";
import Login from "../components/Login";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>100 GÜN BOYUNCA KODLA</h1>
        <h3>
          Bu projenin amacı yapmanız gereken işleri buraya kaydedip 100 gün
          boyunca ilerlemenizi teşvik etmek.
        </h3>
      </header>
      <Login />
    </div>
  );
};

export default Home;

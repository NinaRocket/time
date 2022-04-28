import React from "react";
import companyLogo from "../assets/rocketblack.png";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={companyLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/main.jpg";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Lab Course 1 - React & .NET Project</h1>
        <p> Restaurant Web Application</p>
        <div className="header-buttons">
          <Link to="/order">
            <button> Order now </button>
          </Link>

          <Link to="/location">
            <button> Our Locations </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

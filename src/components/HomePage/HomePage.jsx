import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Dashboard from "../Display/Dashboard";

const HomePage = () => {
  return (
    <div>
      <nav className="nav-menu">
        <Link to="/">HomePage</Link>
        <Link to="/form">Form</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

       
      <p> This is Home Page</p>
    </div>
  );
};

export default HomePage;

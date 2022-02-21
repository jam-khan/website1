import React from "react";
import "./HomePage.css";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";

function Homepage() {
  return (
    <div className="main">
      <Layout>
        <h1>Dormeal</h1>
        <div className="main__button">
          <Button variant="contained">Order Now!</Button>
        </div>
      </Layout>
    </div>
  );
}

export default Homepage;

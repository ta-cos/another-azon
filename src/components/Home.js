import Product from "./Product";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images.unsplash.com/photo-1647221597996-54f3d0f73809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80.jpg"
          alt=""
          className="home__image"
        />
        Photo by{" "}
        <a href="https://unsplash.com/@thehalaldesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          The Halal Design Studio
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/g4W3SLjcvMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;

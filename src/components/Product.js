import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating">🌟🌟🌟</div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/61-YOPMEKoL._AC_SL1080_.jpg"
          alt="Product Image"
          className="product__image"
        />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;

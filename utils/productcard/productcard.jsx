"use client";

import "./productcard.css";

import { useState } from "react";

const ProductCard = ( productitem, setback ) => {
  const [isaddtotray, setisaddtotray] = useState(false);
  return (
    <div className="product_container">
      <div className="product_slider">
        {productitem.product.map((product) => (
          <div key={product._id} className="productcard_container">
            <div
              className="productcard_container-image"
              onClick={() => setback(false)}
            >
              <img src={product.product_image} alt="daat" />
            </div>
            <div className="productcard_container-title">
              <h1>{product.product_title}</h1>
              <p>₹ {product.price}/-</p>
              {isaddtotray ? (
                <div className="productcard_container-qunatity">
                  <button>+</button>
                  <p>1</p>
                  <button>-</button>
                </div>
              ) : (
                <button onClick={() => setisaddtotray(true)}>
                  Add To Tray
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

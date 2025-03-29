import React from "react";

const Product = () => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", maxWidth: "400px" }}>
      <img 
        src="https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg" 
        alt="Headphones" 
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>
        <strong>Headphones | High Base Clear Sound</strong>
      </h2>
      <p>
        The flagship-level battery life for the all-new OnePlus Nord Buds 2r delivers up to 38 hrs of non-stop music on a single charge.
      </p>
      <p><strong>$12</strong></p>
      <button style={{ padding: "10px 20px", background: "black", color: "white", border: "none", cursor: "pointer" }}>
        Buy Now
      </button>
    </div>
  );
};

export default Product;

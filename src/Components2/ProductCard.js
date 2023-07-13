import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductCard = (props) => {
  const { id, name, imageUrl, price } = props.product;

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <a href={`#/products/${id}`}>
          <img
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
            className="product-thumbnail"
            //   src="https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            src={imageUrl}
          />
          <HiSearch className={isHover ? "icon-visible" : "icon-invisible"} />
        </a>
      </div>

      <div className="product-detail-row">
        <p>{name}</p>
        <span className="price-span">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;

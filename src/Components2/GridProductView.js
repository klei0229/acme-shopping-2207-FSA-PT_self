import React from "react";
import ProductCard from "./ProductCard";
const GridProductView = (props) => {
  const { products } = props;
  return (
    <div className="product-gallery">
      {products.map((product) => {
        return <ProductCard product={product}></ProductCard>;
      })}
    </div>
  );
};

export default GridProductView;

import React from "react";
import ListProductCard from "./ListProductCard";
const ProductListView = (props) => {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return <ListProductCard product={product}></ListProductCard>;
      })}
    </div>
  );
};

export default ProductListView;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const { bundles } = useSelector((state) => state);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    setFeaturedProducts(
      bundles.filter((bundle) => {
        return bundle.type == "featured";
      })
    );
  }, [bundles]);

  console.log(bundles);
  return (
    <div className="featured-outer">
      <div className="featured-container">
        <div className="hero-section">
          <div className="underline">
            <h1>Featured Products</h1>
          </div>
          {featuredProducts.map((product) => {
            return <ProductCard product={product}></ProductCard>;
          })}
        </div>
        <button>All Products</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;

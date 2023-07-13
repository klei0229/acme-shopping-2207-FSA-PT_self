import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Products from "./Products";
import FilterColumn from "./FilterColumn";
import Banner from "./Banner";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { bundles } = useSelector((state) => state);
  const [_bundles, setBundles] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentPrice, setCurrentPrice] = useState(100);

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    console.log(bundles);
    setBundles(bundles);
  }, [bundles]);
  return (
    <div className="products-page">
      <Banner text="Products"></Banner>
      <div className="two-col">
        <FilterColumn currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} price={currentPrice} setPrice={setCurrentPrice}></FilterColumn>
        <Products filter={currentCategory} price={currentPrice}></Products>
      </div>
    </div>
  );
};

export default ProductsPage;

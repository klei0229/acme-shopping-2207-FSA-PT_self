import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { BsFillGridFill, BsList } from "react-icons/bs";

import ProductListView from "./ProductListView";
import GridProductView from "./GridProductView";

const Products = (props) => {
  const { bundles } = useSelector((state) => state);
  const { filter, price } = props;
  console.log("filter", filter);
  const [products, setProducts] = useState([]);

  const [isListView, setListView] = useState(false);

  useEffect(() => {
    // console.log(bundles.length);

    console.log(
      bundles.filter((bundle) => {
        return console.log(bundle.tag.split(",").includes(filter));
      })
    );

    setProducts(bundles);
  }, [bundles]);

  useEffect(() => {
    let filteredBundles = [...bundles];

    if (filter == "all") {
    } else {
      filteredBundles = filteredBundles.filter((bundle) => {
        console.log(bundle.name);
        console.log(bundle.tag.split(",").includes(filter));
        return bundle.tag.split(",").includes(filter);
      });
    }

    filteredBundles = filteredBundles.filter((bundle)=>{return bundle.price <= price});
    setProducts(filteredBundles)


  }, [filter, price]);


  return (
    <div className="products-col">
      <div className="row-container">
        <button
          onClick={() => {
            setListView(false);
          }}
          className={isListView ? "inactive-button" : "active-button"}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => {
            setListView(true);
          }}
          className={
            isListView
              ? "active-button list-button"
              : "inactive-button list-button"
          }
        >
          <BsList className="" />
        </button>
        <span>{products.length} Products Found</span>
        <span className="last-element">
          Sort By:
          <select>
            <option>Price (Lowest)</option>
            <option>Price (Highest)</option>
            <option>Name (A-Z)</option>
            <option>Price (Z-A)</option>
          </select>
        </span>
      </div>

      {isListView ? (
        <ProductListView products={products}></ProductListView>
      ) : (
        <GridProductView products={products}></GridProductView>
      )}
    </div>
  );
};

export default Products;

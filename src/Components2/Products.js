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

  const [sortMode, setSortMode] = useState(1);
  const [products, setProducts] = useState([]);

  const [isListView, setListView] = useState(false);

  useEffect(() => {
    let sortedProducts = [...products];
    if (sortMode == 1) {
      console.log("sort alphabettically");
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
      console.log(sortedProducts);
    } else if (sortMode == 2) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (sortMode == 3) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (sortMode == 4) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
    setProducts(sortedProducts);
  }, [sortMode]);
  useEffect(() => {
    // console.log(bundles.length);

    setProducts(bundles);
  }, [bundles]);

  useEffect(() => {
    let sortedProducts = [...bundles];
    if (sortMode == 1) {
      console.log("sort alphabettically");
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
      console.log(sortedProducts);
    } else if (sortMode == 2) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (sortMode == 3) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (sortMode == 4) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
    let filteredBundles = [...sortedProducts];

    if (filter == "all") {
    } else {
      filteredBundles = filteredBundles.filter((bundle) => {
        console.log(bundle.name);
        console.log(bundle.tag.split(",").includes(filter));
        return bundle.tag.split(",").includes(filter);
      });
    }

    filteredBundles = filteredBundles.filter((bundle) => {
      return bundle.price <= price;
    });
    setProducts(filteredBundles);
  }, [filter, price, sortMode]);

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
          <select
            onChange={(e) => {
              setSortMode(e.target.value);
            }}
          >
            <option value={1}>Name (A-Z)</option>
            <option value={2}>Name (Z-A)</option>
            <option value={3}>Price (Lowest)</option>
            <option value={4}>Price (Highest)</option>
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

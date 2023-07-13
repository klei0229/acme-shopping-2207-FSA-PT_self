import React, { useState, useEffect } from "react";
import { categories } from "../Components/data";

const FilterColumn = (props) => {
  const { currentCategory, setCurrentCategory } = props;
  const { price, setPrice } = props;

  return (
    <div className="filters-col">
      <input placeholder="Search"></input>
      <label className="header-label">Category</label>
      {categories.map((category) => {
        if (category == currentCategory) {
          return (
            <label className="child-label child-label-selected">
              {category}
            </label>
          );
        } else {
          return (
            <label
              onClick={() => {
                setCurrentCategory(category);
              }}
              className="child-label"
            >
              {category}
            </label>
          );
        }
      })}
      <hr></hr>
      <label className="header-label">Price</label>
      <label className="child-label">${price}</label>

      <input
        type="range"
        min="1"
        max="100"
        value={price}
        class="slider"
        id="myRange"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <hr></hr>
      <div className="shipping-container">
        <label className="child-label">Free Shipping</label>
        <input className="shipping-checkbox" type="checkbox" checked></input>
      </div>
      <button
        className="filter-button"
        onClick={() => {
          setCurrentCategory("all");
          setPrice(100);
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterColumn;

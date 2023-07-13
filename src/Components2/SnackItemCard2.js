import React from "react";

const SnackItemCard2 = (props) => {
  const { name,imageURL } = props.card;

  return <div className="snack-container">
    <img className="snack-image" src={imageURL}></img>
    <h6>{name}</h6>
  </div>;
};

export default SnackItemCard2;

import React from "react";

const DetailCard = (props) => {
  const { name, description, icon } = props;
  return (
    <div className="detail-card">
      <icon className="detail-card-icon">{icon}</icon>
      <h3>{name}</h3>
      <p className="detail-card-p">{description}</p>
    </div>
  );
};

export default DetailCard;

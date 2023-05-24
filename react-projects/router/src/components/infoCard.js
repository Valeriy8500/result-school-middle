import React from "react";

const InfoCard = ({ id }) => {
  console.log('id: ', id);

  return (
    <div key={id}>
      InfoCard {String(id)}
    </div>
  )
};

export default InfoCard;
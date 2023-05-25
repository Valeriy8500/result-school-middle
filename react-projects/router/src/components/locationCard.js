import React from "react";

const LocationCard = ({
  name,
  type,
  dimension,
  created
}) => {

  return (
    <div className="location-card-container">
      <span className="location-card-container_el">Имя: {name}</span>
      <span className="location-card-container_el">Тип локации: {type}</span>
      <span className="location-card-container_el">Измерение: {dimension}</span>
      <span className="location-card-container_el">
        Дата создания: {created.slice(0, 10).split("-").reverse().join('-')}
      </span>
    </div>
  )
};

export default LocationCard;
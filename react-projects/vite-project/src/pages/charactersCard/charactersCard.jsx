import React from "react";

export function CharactersCard({
  name,
  status,
  species,
  type,
  gender,
  image,
  created
}) {

  return (
    <div className="characters-card-container">
      <img src={image} alt={name} className="characters-card-container_img" />
      <div className="characters-card-container_info">
        <span className="characters-card-container_el">Имя: {name}</span>
        <span className="characters-card-container_el">Статус: {status}</span>
        <span className="characters-card-container_el">Раса: {species}</span>
        <span className="characters-card-container_el">Тип: {type ? type : "--"}</span>
        <span className="characters-card-container_el">Род: {gender}</span>
        <span className="characters-card-container_el">
          Дата создания: {created.slice(0, 10).split("-").reverse().join('-')}
        </span>
      </div>
    </div>
  )
};

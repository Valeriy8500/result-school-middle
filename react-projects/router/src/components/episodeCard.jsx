import React from "react";

const EpisodeCard = ({
  name,
  airDate,
  episode,
  created
}) => {

  return (
    <div className="episode-card-container">
      <span className="episode-card-container_el">Имя: {name}</span>
      <span className="episode-card-container_el">Дата выхода: {airDate}</span>
      <span className="episode-card-container_el">Серия: {episode}</span>
      <span className="episode-card-container_el">
        Дата создания: {created.slice(0, 10).split("-").reverse().join('-')}
      </span>
    </div>
  )
};

export default EpisodeCard;
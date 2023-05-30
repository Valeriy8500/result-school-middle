import React from "react";
import CharactersCard from "./charactersCard";
import EpisodeCard from "./episodeCard";
import LocationCard from "./locationCard";
import NotFound from "./notFound";
import Home from "./home";
import { charactersData } from "../data/charactersData";
import { episodeData } from "../data/episodeData";
import { locationData } from "../data/locationData";
import { NavLink, Routes, Route } from "react-router-dom";

const BaseList = ({ page }) => {

  const list = React.useMemo(() => {
    if (page === "home") {
      return (
        <Home />
      );
    } else if (page === "characters") {
      const charactersList = charactersData.map((item) => {
        return (
          <NavLink
            to={`/characters/${item.id}`}
            key={item.name}
            className="nav-container_navlink"
            style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
          >
            <span>{item.name}</span>
          </NavLink>
        )
      });
      return (
        <>{charactersList}</>
      )
    } else if (page === "episode") {
      const episodeList = episodeData.map((item) => {
        return (
          <NavLink
            to={`/episode/${item.id}`}
            key={item.name}
            className="nav-container_navlink"
            style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
          >
            <span>{item.name}</span>
          </NavLink>
        )
      });
      return (
        <>{episodeList}</>
      )
    } else if (page === "location") {
      const locationList = locationData.map((item) => {
        return (
          <NavLink
            to={`/location/${item.id}`}
            key={item.name}
            className="nav-container_navlink"
            style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
          >
            <span>{item.name}</span>
          </NavLink>
        )
      });
      return (
        <>{locationList}</>
      )
    }
  }, [page]);

  const routes = React.useMemo(() => {
    if (page === "characters") {
      const charactersRoutes = charactersData.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <CharactersCard
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type}
                gender={item.gender}
                image={item.image}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              <div style={{ color: "white", marginLeft: "20px" }}>
                Выберите элемент
              </div>
            }
          />
          {charactersRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "episode") {
      const episodeRoutes = episodeData.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <EpisodeCard
                name={item.name}
                airDate={item.air_date}
                episode={item.episode}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              <div style={{ color: "white", marginLeft: "20px" }}>
                Выберите элемент
              </div>
            }
          />
          {episodeRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "location") {
      const locationRoutes = locationData.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <LocationCard
                name={item.name}
                type={item.type}
                dimension={item.dimension}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              <div style={{ color: "white", marginLeft: "20px" }}>
                Выберите элемент
              </div>
            }
          />
          {locationRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    }
  }, [page]);

  return (
    <div className="baselist">
      <div className={page === "home" ? "nav-container-default" : "nav-container"}>
        {list}
      </div>
      {routes}
    </div>
  )
};

export default BaseList;
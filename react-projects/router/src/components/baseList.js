import React from "react";
import InfoCard from "./infoCard";
import { charactersData } from "../data/charactersData";
import { episodeData } from "../data/episodeData";
import { locationData } from "../data/locationData";
import { NavLink, Routes, Route } from "react-router-dom";

const BaseList = ({ page }) => {

  const list = React.useMemo(() => {
    if (page === "home") {
      return (
        <h2>Добро пожаловать во вселенную Рика и Морти!</h2>
      );
    } else if (page === "characters") {
      const charactersList = charactersData.map((item) => {
        return (
          <NavLink to={`/characters/${item.id}`} key={item.name}>{item.name}</NavLink>
        )
      });
      return (
        <>{charactersList}</>
      )
    } else if (page === "episode") {
      const episodeList = episodeData.map((item) => {
        return (
          <NavLink to={`/episode/${item.id}`} key={item.name}>{item.name}</NavLink>
        )
      });
      return (
        <>{episodeList}</>
      )
    } else if (page === "location") {
      const locationList = locationData.map((item) => {
        return (
          <NavLink to={`/location/${item.id}`} key={item.name}>{item.name}</NavLink>
        )
      });
      return (
        <>{locationList}</>
      )
    }
  }, [page]);

  const routes = React.useMemo(() => {
    if (page === "characters") {
      const charactersRoutes = charactersData.map((item, idx) => {
        return (
          <Route key={item.id} path={`${item.id}`} element={<InfoCard id={item.id} />} />
        )
      });
      return (
        <Routes>{charactersRoutes}</Routes>
      )
    } else if (page === "episode") {
      const episodeRoutes = episodeData.map((item, idx) => {
        return (
          <Route key={item.id} path={`${item.id}`} element={<InfoCard id={item.id} />} />
        )
      });
      return (
        <Routes>{episodeRoutes}</Routes>
      )
    } else if (page === "location") {
      const locationRoutes = locationData.map((item, idx) => {
        return (
          <Route key={item.id} path={`${item.id}`} element={<InfoCard id={item.id} />} />
        )
      });
      return (
        <Routes>{locationRoutes}</Routes>
      )
    }
  }, [page]);

  return (
    <div key={page}>
      {list}
      {routes}
    </div>
  )
};

export default BaseList;
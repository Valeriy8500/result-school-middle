import React, { lazy } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useListElements } from "./useListElements";

const CharactersCard = lazy(() => import("./charactersCard"));
const EpisodeCard = lazy(() => import("./episodeCard"));
const LocationCard = lazy(() => import("./locationCard"));
const NotFound = lazy(() => import("./notFound"));
const Home = lazy(() => import("./home"));

export const BaseList = ({ page, url, pageNumber, setPageNumber }) => {
  const observer = React.useRef();

  const {
    loading,
    elements,
    hasMore
  } = useListElements(url, pageNumber);

  const lastNodeRef = React.useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      // проверяем, виден ли последний элемент на экране
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prev => prev + 1);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [hasMore, setPageNumber]);

  const list = React.useMemo(() => {
    if (page === "home") {
      return (
        <Home />
      );
    } else if (page === "characters") {
      const charactersList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/characters/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
              ref={lastNodeRef}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/characters/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{charactersList}</>
      )
    } else if (page === "episode") {
      const episodeList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/episode/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
              ref={lastNodeRef}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/episode/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{episodeList}</>
      )
    } else if (page === "location") {
      const locationList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/location/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
              ref={lastNodeRef}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/location/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{locationList}</>
      )
    }
  }, [page, elements, lastNodeRef]);

  const routes = React.useMemo(() => {
    if (page === "characters") {
      const charactersRoutes = elements.map((item) => {
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
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {charactersRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "episode") {
      const episodeRoutes = elements.map((item) => {
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
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {episodeRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "location") {
      const locationRoutes = elements.map((item) => {
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
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {locationRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    }
  }, [page, elements, loading]);

  return (
    <div className="baselist">
      <div className={page === "home" ? "nav-container-default" : "nav-container"}>
        {list}
        {loading && <span className="loading">Loading...</span>}
      </div>
      {routes}
    </div>
  )
};

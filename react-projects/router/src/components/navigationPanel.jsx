import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavigationPanel({ setPageNumber }) {
  return (
    <>
      <div className="navigation-panel">
        <NavLink to="/" className="navigation-panel_home"><h2>R&M</h2></NavLink>
        <NavLink
          to="/characters"
          className="navigation-panel_navlink"
          onClick={(e) => setPageNumber((prev) => {
            if (e.target.className === "navigation-panel_navlink active") {
              return prev;
            } else {
              return 1;
            }
          })}
        >
          Герои
        </NavLink>
        <NavLink
          to="/episode"
          className="navigation-panel_navlink"
          onClick={(e) => setPageNumber((prev) => {
            if (e.target.className === "navigation-panel_navlink active") {
              return prev;
            } else {
              return 1;
            }
          })}
        >
          Эпизоды
        </NavLink>
        <NavLink
          to="/location"
          className="navigation-panel_navlink"
          onClick={(e) => setPageNumber((prev) => {
            if (e.target.className === "navigation-panel_navlink active") {
              return prev;
            } else {
              return 1;
            }
          })}
        >
          Локации
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default NavigationPanel;
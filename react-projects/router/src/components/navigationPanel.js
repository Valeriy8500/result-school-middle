import React from "react";
import { NavLink } from "react-router-dom";

function NavigationPanel() {
  return (
    <div className="navigation-panel">
      <NavLink to="/"><h2>R&M</h2></NavLink>
      <NavLink to="/characters">Герои</NavLink>
      <NavLink to="/episode">Эпизоды</NavLink>
      <NavLink to="/location">Локации</NavLink>
    </div>
  );
}

export default NavigationPanel;
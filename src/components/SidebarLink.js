import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ menuItem }) => {
  if (menuItem.type === "heading")
    return (
      <h1 className="sidebar-heading text-neutral-200 font-medium text-2xl tracking-wide mt-3 mb-1 ps-3">
        <u>{menuItem.label}</u>
      </h1>
    );

  return (
    <NavLink
      to={menuItem.link}
      className={({ isActive }) => (isActive ? "sidebar-link-active" : "")}
    >
      <li className="sidebar-item" title={menuItem.label}>
        <i className={"sidebar-icon fa-solid " + menuItem.icon}></i>
        <span className="sidebar-text">{menuItem.label}</span>
        {menuItem.badge && (
          <div className="relative">
            <span className="badge">{menuItem.badge}</span>
          </div>
        )}      </li>
    </NavLink>
  );
};

export default SidebarLink;

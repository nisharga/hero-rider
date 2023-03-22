import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ to, children }) => {
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlink;

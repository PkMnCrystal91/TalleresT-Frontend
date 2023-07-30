import { useState, useEffect } from "react";
import { FaHome, FaWpforms, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getOptions } from "../api/Api";

import "../styles/Sidebar.css";

export const Sidebar = ({ children }) => {
  const [menuOptions, setMenuOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    getOptions().then((resp) => {
      setMenuOptions(resp);
    });
  }, []);

  let { name } = menuOptions;

  const menuItem = [
    {
      path: "/",
      name: "Movies",
      icon: <FaHome />,
    },
    {
      path: "/form",
      name: "Form",
      icon: <FaWpforms />,
    },
  ];

  return (
    <div className="container px-0 mx-0">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar sticky-start"
      >
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo fs-5"
          >
            MoviesApp
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

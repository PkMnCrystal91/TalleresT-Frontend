import { useState, useEffect } from "react";
import { FaHome, FaWpforms, FaBars, FaArchive } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getOptions } from "../api/Api";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import "../styles/Sidebar.css";

export const Sidebar = ({ children }) => {
  const { user } = useContext(UserContext);

  const [isButtonEnabled, setButtonEnabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  /* const [menuOptions, setMenuOptions] = useState([]); */
  /* useEffect(() => {
    getOptions().then((resp) => {
      setMenuOptions(resp);
    });
  }, []); */

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

  const superAdminLink = [
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
    {
      path: "/renta",
      name: "Rentas",
      icon: <FaArchive />,
    },
  ];

  return (
    <div className="container px-0 mx-0">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
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
        <div className="toggle-box mb-3">
          <button
            className="btn btn-light border-dark-subtle"
            onClick={() => setButtonEnabled(!isButtonEnabled)}
          >
            {isButtonEnabled ? "Disable" : "Enable"}
          </button>
        </div>
        {user.rol === "administrador"
          ? menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={`link ${
                  isButtonEnabled ? "enabled-button" : "disabled-button"
                }`}
                disabled={!isButtonEnabled}
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))
          : superAdminLink.map((item, index) => (
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

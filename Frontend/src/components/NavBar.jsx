import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UrlShortenerGray2 from "../assets/UrlShortenerGray2.PNG";
import UrlShortenerWhite2 from "../assets/UrlShortenerWhite2.PNG";
import "../styles/NavBar.css";

const NavBar = () => {
  const [theme, setTheme] = useState(document.body.getAttribute("data-theme"));
  const [logoSrc, setLogoSrc] = useState(
    theme === "dark" ? UrlShortenerGray2 : UrlShortenerWhite2
  );

  useEffect(() => {
    // Observador para detectar cambios en el atributo data-theme del body
    const observer = new MutationObserver(() => {
      const currentTheme = document.body.getAttribute("data-theme");
      setTheme(currentTheme); // Actualiza el estado local
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect(); // Limpieza al desmontar el componente
  }, []);

  useEffect(() => {
    // Actualiza el logo cada vez que el tema cambia
    const newLogo = theme === "dark" ? UrlShortenerGray2 : UrlShortenerWhite2;
    setLogoSrc(newLogo);
  }, [theme]);

  return (
    <div>
      <nav className="nav-container">
        <div>
          <Link to={"/"}>
            <img src={logoSrc} alt="URL Shortener Logo" className="logo-img-gray" />
          </Link>
        </div>
        <div>
          <ul className="list">
            <li className="link-list">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="link-list">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;



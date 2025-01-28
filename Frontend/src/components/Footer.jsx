import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UrlShortenerGray2 from "../assets/urlShortenerGray2.PNG";
import UrlShortenerWhite2 from "../assets/urlShortenerWhite2.PNG";
import "../styles/Footer.css";


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
    


    return(
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <Link to={ "/"}>
                        <img src={logoSrc} alt="URL Shortener Logo" className="logo-img-gray" />
                        </Link>
                    </div>
                    <div className="footer-bottom">
                        <a href="https://github.com/SashaWaszaj/link-shortener" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i></a>
                        <p>© {new Date().getFullYear()} URL Shortener Service. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    )
}

export default NavBar;
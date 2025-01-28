import React from "react";
import { Link } from "react-router-dom";
import UrlShortenerGray from "../img/urlShortenerGray.png";
import "../styles/Footer.css";


const NavBar = () => {

    return(
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <Link to={ "/"}>
                            <img
                                src={ UrlShortenerGray }
                                alt="URL Shortener Logo"
                                className="logo-img-gray-footer"
                            />
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
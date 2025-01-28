import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About URL Shortener Service</h2>
            <p className="about-description">
                Welcome to our URL Shortener Service! This service allows you to
                shorten long URLs into compact and easy-to-share links. Whether you're
                sharing links on social media, via email, or with friends, our tool
                makes it easier and faster.
            </p>
            <p className="about-description">
                We prioritize simplicity and speed, so you can create a shortened URL
                with just a few clicks. No account required, and no complicated settings
                to worry about—just paste your long URL, click the button, and your short
                URL is ready to use!
            </p>
            <p className="about-description-question">
                Why use our URL Shortener? It's quick, easy, and secure. With our service,
                you can:
            </p>
            <ul className="about-list">
                <li>Shorten long URLs into a more manageable format</li>
                <li>Share links easily on social media or email</li>
                <li>Keep track of your short links and access them anytime</li>
                <li>Save time and improve your link sharing experience</li>
            </ul>
            <p className="about-description">
                We hope you find our service useful and easy to use. If you have any
                questions or feedback, feel free to reach out to us. Thank you for using our
                URL Shortener Service!
            </p>
        </div>
    );
};

export default About;

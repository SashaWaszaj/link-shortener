import React, { useState } from "react";
import axios from "axios";
import InputWithDynamicWidth from "./InputWithDynamicWidth";
import "../styles/Home.css";

const Home = () => {
    const [shortUrl, setShortUrl] = useState("");
    const [url, setUrl] = useState({ longUrl: "" });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setUrl({ longUrl: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url.longUrl.startsWith("http")) {
            setError("Please enter a valid URL starting with http or https.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/api/url/shorten", { longUrl: url.longUrl });
            setShortUrl(response.data.shortUrl);
            setError("");
        } catch (err) {
            setError(err.response?.data?.message || "Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="main-container">
            <h2 className="main-title">URL Shortener Service</h2>
            <div>
                    <p className="quote">Safe, fast and simple URL shortener</p>
                </div>
            <form onSubmit={handleSubmit} className="form-container">
                <InputWithDynamicWidth
                    value={url.longUrl}
                    onChange={handleChange}
                    placeholder="Paste an URL to shorten..."
                    maxWidth={0.6}
                />
                <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Shorten"}
                </button>
            </form>
            {shortUrl && (
                <div className="shortUrl-link-container">
                    <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shortUrl-link"
                    >
                        {shortUrl}
                    </a>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(shortUrl)}>Copy</button>
                </div>
            )}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Home;


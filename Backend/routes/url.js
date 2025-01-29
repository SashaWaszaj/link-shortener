const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
require('dotenv').config();
const Url = require('../models/url.model');

const baseUrl = process.env.BASE_URL || "http://localhost:8080"; // Usa la URL de producción

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;

    // Check Base Url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate();

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${baseUrl}/${urlCode}`; // Construye la URL correctamente

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                await url.save();
                res.json(url);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
});

module.exports = router;

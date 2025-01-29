const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
require('dotenv').config();

const app = express();
connectDB();

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

// Lista de dominios permitidos
const allowedOrigins = [
    'https://url-shortener-service-app.netlify.app', // Frontend en producción
    'http://localhost:5173', // Frontend en desarrollo
];

// Middleware CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    // Manejar solicitudes OPTIONS
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.use(express.json({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));




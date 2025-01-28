const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const config = require('./config/config');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());

// Configuración de CORS
const allowedOrigins = [
    'https://url-shortener-service-app.netlify.app/', // Frontend en producción
    'http://localhost:5173', // Frontend en desarrollo
];

app.use(cors({
    origin: allowedOrigins,  // Permitir solo estos orígenes
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({extended: false}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
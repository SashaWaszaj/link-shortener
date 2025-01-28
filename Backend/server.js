const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();
const config = require('./config/config');
const baseUrl = config.get('baseUrl');
require('dotenv').config();

connectDB();

// Configuración de CORS
const allowedOrigins = [
    'https://url-shortener-service-app.netlify.app', 
    'http://localhost:5173', 
];

app.use(cors({
    origin: allowedOrigins, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({extended: false}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
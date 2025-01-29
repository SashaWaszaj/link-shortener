const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const config = require('config');
require('dotenv').config();

const app = express();

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

app.use(express.json({ extended: false }));

connectDB();

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Usar config.get() correctamente
const baseUrl = config.get('baseUrl');
const PORT = process.env.PORT || config.get('port');

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));



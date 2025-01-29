const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const config = require('config');
require('dotenv').config();

const app = express();

// Lista de dominios permitidos
const allowedOrigins = [
    'https://url-shortener-service-app.netlify.app/', // Frontend en producción
    'http://localhost:5173', // Frontend en desarrollo
];

// Configuración de CORS
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use((err, req, res, next) => {
    if (err instanceof Error && err.message === 'Not allowed by CORS') {
        return res.status(403).json({ error: 'CORS policy does not allow access from this origin.' });
    }
    next(err);
});

app.use(express.json({ extended: false }));

connectDB();

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Usar config.get() correctamente
const baseUrl = config.get('baseUrl');
const PORT = process.env.PORT || config.get('port');

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));



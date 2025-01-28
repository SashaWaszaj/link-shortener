const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const config = require('./config');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());

app.use(cors({
    origin: ["http://localhost:5173", "https://url-shortener-service-app.netlify.app/"],
    methods: ["GET", "POST"],
}));

app.use(express.json({extended: false}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
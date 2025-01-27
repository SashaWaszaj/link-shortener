const express = require("express");
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
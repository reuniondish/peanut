const express = require('express');
const dotenv = require('dotenv');

// Load ENV Config
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route Files
const parties = require('./routes/parties');

// Load ENV Config
dotenv.config({path: './config/config.env'});

const app = express();

// DEV logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount Routes
app.use('/api/v1/parties', parties);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
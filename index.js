const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

// connecting to mongoodb atlas


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('connecting database mongodb atlas!');
}).catch(error => {
    console.log('something wrong!', error)
})





app.listen(PORT, () => {
    console.log(`server listening Port : ${PORT}`);
})
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoute = require('./routes/books');


require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

// route
app.use('/api/books', bookRoute);

// connecting to mongoodb atlas
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('connecting database mongodb atlas!');
}).catch(error => {
    console.log('something wrong!', error)
})




// connecting server
app.listen(PORT, () => {
    console.log(`server listening Port : ${PORT}`);
})
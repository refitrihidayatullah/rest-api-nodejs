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

// index
app.get('/', (req, res) => {
    res.send('<h3 style="text-align:center">Rest Api Book</h3><h5 style="text-align:center">GET all data book => GET "https://app-rest-api-books.herokuapp.com/api/books"</h5><h5 style="text-align:center">GET data book by id => GET "https://app-rest-api-books.herokuapp.com/api/books/id"</h5><h5 style="text-align:center">ADD data book => POST "https://app-rest-api-books.herokuapp.com/api/books"</h5><h5 style="text-align:center">UPDATE data book => PUT "https://app-rest-api-books.herokuapp.com/api/books/id"</h5><h5 style="text-align:center">DELETE data book => DELETE "https://app-rest-api-books.herokuapp.com/api/books/id"</h5><h3 style="text-align:center">Refi Tri Hidayatullah 2022</h3>');
})



// connecting server
app.listen(PORT, () => {
    console.log(`server listening Port : ${PORT}`);
})
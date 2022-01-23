const express = require('express');
const cors = require('cors'); // allows servers to specify who can access and how they can be accessed (http requests)
const mongoose = require('mongoose'); //help connect to mongodb database

require('dotenv').config(); //access environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const plimit = require('p-limit');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

const categoryRoutes = require('./routes/categories');

app.use(`/api/category`, categoryRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connection is ready...');
        //server 
        app.listen(process.env.PORT, () => {
            console.log(`server is running http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err);
    })


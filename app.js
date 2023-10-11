const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/apimusic');

app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require('./routes/musicRoute');
app.use('/', musicRoute);

const voteRoute = require('./routes/voteRoute');
app.use('/', voteRoute);

const resultRoute =require('.routes/resultRoute');
app.use('/', resultRoute);



app.listen(port);
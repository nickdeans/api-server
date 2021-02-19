'use strict';

const express = require('express');
const app = express();

const petsRouter = require('./routes/pets.js');
const sportsRouter = require('./routes/sports.js');

app.use(express.json());
app.use(petsRouter);
app.use(sportsRouter);

module.exports = {
    app: app,
    start: (port) => {
        app.listen(port, () => console.log('App s listening on port :: ' + port))
    }
}
'use strict';

const mongoose = require('mongoose');

const petsSchema = mongoose.Schema({
    name: { type: String, required: true},
    ball: { type: String },
});

const petsModel = mongoose.model('pet', petsSchema);

module.exports = petsModel;
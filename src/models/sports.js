'use strict';

const mongoose = require('mongoose');

const sportsSchema = mongoose.Schema({
    name: { type: String, required: true},
    ball: { type: String },
});

const sportsModel = mongoose.model('athlete', sportsSchema);

module.exports = sportsModel;
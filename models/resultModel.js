const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultSchema = new Schema({
    rating: {
        type: Number,
        required: true,
    },
    vote_id: {
        type: String,
    }

})

module.exports = mongoose.model('Result', voteSchema)